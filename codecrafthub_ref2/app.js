const express = require('express');
const fs = require('fs');
const app = express();

const PORT = 5000;
const DATA_FILE = 'courses.json';
const VALID_STATUSES = ['Not Started', 'In Progress', 'Completed'];

app.use(express.json());

// Kurse laden
function loadCourses() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }

  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
}

// Kurse speichern
function saveCourses(courses) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(courses, null, 2));
}

// Eingaben prüfen
function validateCourse(data, isUpdate = false) {
  const errors = [];

  if (!isUpdate || data.name !== undefined) {
    if (!data.name || data.name.trim() === '') {
      errors.push('name ist erforderlich');
    }
  }

  if (!isUpdate || data.description !== undefined) {
    if (!data.description || data.description.trim() === '') {
      errors.push('description ist erforderlich');
    }
  }

  if (!isUpdate || data.target_date !== undefined) {
    if (!data.target_date || !/^\d{4}-\d{2}-\d{2}$/.test(data.target_date)) {
      errors.push('target_date ist erforderlich im Format YYYY-MM-DD');
    }
  }

  if (!isUpdate || data.status !== undefined) {
    if (!VALID_STATUSES.includes(data.status)) {
      errors.push('status muss sein: Not Started, In Progress oder Completed');
    }
  }

  return errors;
}

// Startseite
app.get('/', (req, res) => {
  res.send('CodeCraftHub API läuft!');
});

// Alle Kurse holen
app.get('/api/courses', (req, res) => {
  const courses = loadCourses();
  res.json(courses);
});

// Statistik holen
app.get('/api/courses/stats', (req, res) => {
  const courses = loadCourses();

  const stats = {
    total: courses.length,
    'Not Started': 0,
    'In Progress': 0,
    Completed: 0
  };

  courses.forEach(course => {
    if (stats[course.status] !== undefined) {
      stats[course.status]++;
    }
  });

  res.json(stats);
});

// Kurse durchsuchen
app.get('/api/courses/search', (req, res) => {
  const courses = loadCourses();
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ message: 'Search query fehlt' });
  }

  const results = courses.filter(course =>
    course.name.toLowerCase().includes(query.toLowerCase()) ||
    course.description.toLowerCase().includes(query.toLowerCase())
  );

  res.json(results);
});

// Einzelnen Kurs holen
app.get('/api/courses/:id', (req, res) => {
  const courses = loadCourses();
  const courseId = parseInt(req.params.id);
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return res.status(404).json({ message: 'Kurs nicht gefunden' });
  }

  res.json(course);
});

// Neuen Kurs erstellen
app.post('/api/courses', (req, res) => {
  const errors = validateCourse(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const courses = loadCourses();

  const newCourse = {
    id: courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1,
    name: req.body.name,
    description: req.body.description,
    target_date: req.body.target_date,
    status: req.body.status,
    created_at: new Date().toISOString()
  };

  courses.push(newCourse);
  saveCourses(courses);

  res.status(201).json(newCourse);
});

// Kurs aktualisieren
app.put('/api/courses/:id', (req, res) => {
  const courses = loadCourses();
  const courseId = parseInt(req.params.id);
  const courseIndex = courses.findIndex(c => c.id === courseId);

  if (courseIndex === -1) {
    return res.status(404).json({ message: 'Kurs nicht gefunden' });
  }

  const errors = validateCourse(req.body, true);

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  courses[courseIndex] = {
    ...courses[courseIndex],
    name: req.body.name ?? courses[courseIndex].name,
    description: req.body.description ?? courses[courseIndex].description,
    target_date: req.body.target_date ?? courses[courseIndex].target_date,
    status: req.body.status ?? courses[courseIndex].status
  };

  saveCourses(courses);
  res.json(courses[courseIndex]);
});

// Kurs löschen
app.delete('/api/courses/:id', (req, res) => {
  const courses = loadCourses();
  const courseId = parseInt(req.params.id);
  const filteredCourses = courses.filter(c => c.id !== courseId);

  if (filteredCourses.length === courses.length) {
    return res.status(404).json({ message: 'Kurs nicht gefunden' });
  }

  saveCourses(filteredCourses);
  res.json({ message: 'Kurs gelöscht' });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});