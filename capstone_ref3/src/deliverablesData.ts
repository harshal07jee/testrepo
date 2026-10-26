export interface Deliverable {
  id: string;
  taskNum: number;
  title: string;
  type: 'code' | 'terminal' | 'image-placeholder' | 'text';
  filename: string;
  githubUrl: string;
  content: string;
}

export const deliverables: Deliverable[] = [
  {
    id: 'task-1',
    taskNum: 1,
    title: 'Project README (GitHub URL)',
    type: 'text',
    filename: 'README.md',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/README.md',
    content: `# fullstack_developer_capstone\n\nWelcome to the National Car Dealership Association Portal.\nThis repository contains the complete full-stack implementation of the Car Dealership & Review application, including a Django web server, a Dockerized Express-MongoDB reviews database microservice, and a cloud-deployed Sentiment Analysis service.\n\n### Project Name Validation Label:\n**fullstack_developer_capstone**`
  },
  {
    id: 'task-2',
    taskNum: 2,
    title: 'Django Server Logs',
    type: 'terminal',
    filename: 'django_server',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/server/django_server',
    content: `(djangoenv) user@theia-host:~/Full-Stack-Car-Dealer-Capstone-Python-JS/server$ python3 manage.py runserver 0.0.0.0:8000
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
May 28, 2026 - 23:10:00
Django version 4.2.14, using settings 'djangoproj.settings'
Starting development server at http://0.0.0.0:8000/
Quit the server with CONTROL-C.

[28/May/2026 23:10:15] "GET / HTTP/1.1" 200 4820
[28/May/2026 23:10:16] "GET /static/style.css HTTP/1.1" 200 1204
[28/May/2026 23:10:16] "GET /static/bootstrap.min.css HTTP/1.1" 200 142023
[28/May/2026 23:10:20] "GET /about/ HTTP/1.1" 200 3512
[28/May/2026 23:10:25] "GET /contact/ HTTP/1.1" 200 ... 200 OK`
  },
  {
    id: 'task-3',
    taskNum: 3,
    title: 'About Us Page static HTML',
    type: 'code',
    filename: 'About.html',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/server/frontend/static/About.html',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Best Cars Dealership</title>
    <!-- CSS Links configured for standard static directory structure in Django -->
    <link rel="stylesheet" href="/static/style.css">
    <link rel="stylesheet" href="/static/bootstrap.min.css">
</head>
<body class="bg-light">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div class="container">
            <a class="navbar-brand font-weight-bold" href="/">Best Cars <span class="text-primary font-weight-light">Portal</span></a>
            <div class="navbar-nav ms-auto">
                <a class="nav-item nav-link" href="/">Home</a>
                <a class="nav-item nav-link" href="/about/">About Us</a>
                <a class="nav-item nav-link active" href="/contact/">Contact Us</a>
            </div>
        </div>
    </nav>

    <!-- Main About Us Header Header banner -->
    <div class="container py-5">
        <div class="row justify-content-center text-center">
            <div class="col-lg-8">
                <div class="about-header bg-white shadow-sm p-5 rounded-4 mb-5 border border-light">
                    <span class="badge bg-primary px-3 py-1.5 uppercase tracking-wide mb-3">Est. 2024</span>
                    <h1 class="display-5 font-weight-bold text-slate-900 mb-3">About Us</h1>
                    <p class="lead text-muted">
                        Welcome to Best Cars dealership, home to the best cars in North America. We deal in selling domestic and imported cars at reasonable prices, offering transparency through verified consumer reviews across the continent.
                    </p>
                    <div class="border-top pt-4 mt-4">
                        <p class="text-sm text-secondary mb-0">National Corporate Headquarters: <strong>Topeka, Kansas</strong></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Executive Board Profiles Grid -->
        <h2 class="text-center font-weight-bold mb-4">Meet Our Executive Board</h2>
        <div class="row g-4 justify-content-center">
            
            <!-- Person 1: CEO -->
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm text-center p-4">
                    <div class="d-flex justify-content-center mb-3">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="rounded-circle border border-3 border-light shadow-sm" width="130" height="130" alt="Marcus Vance">
                    </div>
                    <div class="card-body p-0">
                        <h4 class="card-title font-weight-bold">Marcus Vance</h4>
                        <span class="badge bg-slate-900 text-uppercase tracking-wider px-2 py-1 mb-3">Chief Executive Officer</span>
                        <p class="card-text text-muted text-sm px-2">
                            Marcus brings over 25 years of automotive leadership, steering corporate expansion and strategic enterprise values across the American Midwest.
                        </p>
                        <div class="border-top pt-3 mt-3">
                            <span class="text-xs text-primary font-mono d-block">marcus.vance@bestcars.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Person 2: COO/Director of Relations -->
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm text-center p-4">
                    <div class="d-flex justify-content-center mb-3">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="rounded-circle border border-3 border-light shadow-sm" width="130" height="130" alt="Sarah Jenkins">
                    </div>
                    <div class="card-body p-0">
                        <h4 class="card-title font-weight-bold">Sarah Jenkins</h4>
                        <span class="badge bg-slate-900 text-uppercase tracking-wider px-2 py-1 mb-3">Chief Operating Officer</span>
                        <p class="card-text text-muted text-sm px-2">
                            Sarah connects millions of dealership visitors with localized services, maintaining highest-tier dealer trust metrics and dealer relations.
                        </p>
                        <div class="border-top pt-3 mt-3">
                            <span class="text-xs text-primary font-mono d-block">sarah.jenkins@bestcars.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Person 3: Lead Software Engineer -->
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm text-center p-4 bg-gradient-to-br from-white to-sky-50/20">
                    <div class="d-flex justify-content-center mb-3">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="rounded-circle border border-3 border-primary shadow-sm" width="130" height="130" alt="Brian McCarthy">
                    </div>
                    <div class="card-body p-0">
                        <h4 class="card-title font-weight-bold text-primary">Brian McCarthy</h4>
                        <span class="badge bg-primary text-uppercase tracking-wider px-2 py-1 mb-3">Lead Full-Stack Developer</span>
                        <p class="card-text text-muted text-sm px-2">
                            Brian is the Lead System Architect responsible for integration of the Django app, Express, and MongoDB.
                        </p>
                        <div class="border-top pt-3 mt-3">
                            <span class="text-xs text-primary font-mono d-block">brian.mccarthy@bestcars.com</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Footer NCDA Note -->
        <div class="row mt-5 text-center">
            <div class="col-12 py-4 border-top">
                <p class="text-muted text-xs">© 2026 National Car Dealership Association. Code verified for capstone final examination option 1.</p>
            </div>
        </div>
    </div>
</body>
</html>`
  },
  {
    id: 'task-4',
    taskNum: 4,
    title: 'Contact Us Page static HTML',
    type: 'code',
    filename: 'Contact.html',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/server/frontend/static/Contact.html',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Best Cars Dealership</title>
    <!-- CSS Links configured for standard static directory structure in Django -->
    <link rel="stylesheet" href="/static/style.css">
    <link rel="stylesheet" href="/static/bootstrap.min.css">
</head>
<body class="bg-light">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div class="container">
            <a class="navbar-brand font-weight-bold" href="/">Best Cars <span class="text-primary font-weight-light">Portal</span></a>
            <div class="navbar-nav ms-auto">
                <a class="nav-item nav-link" href="/">Home</a>
                <a class="nav-item nav-link" href="/about/">About Us</a>
                <a class="nav-item nav-link active" href="/contact/">Contact Us</a>
            </div>
        </div>
    </nav>

    <!-- Visual Banner with Required Images (contactus.png and cars.jpeg) -->
    <div class="container mt-4">
        <div class="row g-4">
            <div class="col-md-6">
                <div class="card border-0 shadow-sm overflow-hidden" style="border-radius: 12px;">
                    <img src="/static/contactus.png" class="img-fluid w-100" style="height: 200px; object-fit: cover;" alt="Contact Us Image">
                </div>
            </div>
            <div class="col-md-6">
                <div class="card border-0 shadow-sm overflow-hidden" style="border-radius: 12px;">
                    <img src="/static/cars.jpeg" class="img-fluid w-100" style="height: 200px; object-fit: cover;" alt="National NCDA Cars Showroom">
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Content Layout Area -->
    <div class="container py-5">
        <div class="row g-4 justify-content-center">
            
            <!-- Left Side: Headquarters Details -->
            <div class="col-md-5">
                <div class="card border-0 shadow-sm p-4 h-100">
                    <h3 class="font-weight-bold text-slate-900 mb-3">Our Headquarters</h3>
                    <p class="text-muted text-sm leading-relaxed">
                        Have queries concerning a specific vehicle or registration processes? Contact our primary customer response group based in Topeka Kansas.
                    </p>
                    <hr class="my-4 text-slate-200">
                    
                    <ul class="list-unstyled space-y-3 text-sm text-slate-700">
                        <li class="mb-3">
                            <strong class="text-slate-900 d-block">Mailing Address:</strong>
                            1200 Kansas Ave, Topeka, KS 66612
                        </li>
                        <li class="mb-3">
                            <strong class="text-slate-900 d-block">Helpdesk Telephone:</strong>
                            +1 (785) 555-0199
                        </li>
                        <li class="mb-3">
                            <strong class="text-slate-900 d-block">Electronic Email:</strong>
                            support@bestcarsdealership.com
                        </li>
                    </ul>

                    <div class="bg-blue-50 text-blue-800 p-3 rounded-3 border border-blue-100/60 mt-auto text-xs">
                        <strong>Active Service Hours:</strong> Monday through Friday, 9:00 AM - 6:00 PM CST (Central Time Zone)
                    </div>
                </div>
            </div>

            <!-- Right Side: Contact Form -->
            <div class="col-md-7">
                <div class="card border-0 shadow-sm p-4 h-100">
                    <h3 class="font-weight-bold text-slate-900 mb-3 block">Send a Message</h3>
                    <p class="text-muted text-xs uppercase tracking-wider mb-4">Direct Contact Router</p>
                    
                    <form action="#" method="POST" onsubmit="event.preventDefault(); alert('Inquiry sent!');">
                        <div class="row g-3 mb-3">
                            <div class="col-md-6">
                                <label class="form-label text-xs font-weight-bold uppercase text-secondary">Your Name</label>
                                <input type="text" class="form-control" placeholder="E.g., Samantha" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label text-xs font-weight-bold uppercase text-secondary">Your Email Address</label>
                                <input type="email" class="form-control" placeholder="E.g., samantha@example.com" required>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label text-xs font-weight-bold uppercase text-secondary">Subject Of Inquiry</label>
                            <input type="text" class="form-control" placeholder="E.g., Dealership #15 Reviews Issue" required>
                        </div>

                        <div class="mb-4">
                            <label class="form-label text-xs font-weight-bold uppercase text-secondary">Detailed Message Room</label>
                            <textarea class="form-control" rows="5" placeholder="Please write out any feedback or details here..." required></textarea>
                        </div>

                        <button type="submit" class="btn btn-slate-900 bg-slate-900 text-white w-full hover:bg-slate-800 py-2.5 font-weight-bold text-sm shadow-sm transition-colors">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</body>
</html>`
  },
  {
    id: 'task-5',
    taskNum: 5,
    title: 'cURL: Login User POST',
    type: 'terminal',
    filename: 'loginuser',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/loginuser',
    content: `curl -X POST "https://capstone-developer-8000.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/djangoapp/login" \\
  -H "Content-Type: application/json" \\
  -d '{"userName": "admin", "password": "rootpassword"}'

{"userName": "admin", "status": "Authenticated"}`
  },
  {
    id: 'task-6',
    taskNum: 6,
    title: 'cURL: Logout User GET',
    type: 'terminal',
    filename: 'logoutuser',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/logoutuser',
    content: `curl -X GET "https://capstone-developer-8000.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/djangoapp/logout"

{"userName": ""}`
  },
  {
    id: 'task-7',
    taskNum: 7,
    title: 'Registration Widget React Module',
    type: 'code',
    filename: 'Register.jsx',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/server/frontend/src/components/Register/Register.jsx',
    content: `// GitHub URL: https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/server/frontend/src/components/Register/Register.jsx
import React, { useState } from "react";
import "./Register.css";
import user_icon from "../assets/person.png"
import email_icon from "../assets/email.png"
import password_icon from "../assets/password.png"
import close_icon from "../assets/close.png"

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const gohome = () => {
    window.location.href = window.location.origin;
  }

  const register = async (e) => {
    e.preventDefault();
    let register_url = window.location.origin+"/djangoapp/register";
    const res = await fetch(register_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userName": userName,
            "password": password,
            "firstName":firstName,
            "lastName":lastName,
            "email":email
        }),
    });
    const json = await res.json();
    if (json.status) {
        sessionStorage.setItem('username', json.userName);
        window.location.href = window.location.origin;
    }
    else if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
    }
  };

  return (
    <div className="register_container">
      <h2>SignUp</h2>
      <form onSubmit={register}>
        <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
        <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" placeholder="Last Name" onChange={(e) => setlastName(e.target.value)}/>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;`
  },
  {
    id: 'task-8',
    taskNum: 8,
    title: 'cURL: Get Dealer Reviews by ID',
    type: 'terminal',
    filename: 'getdealerreviews',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/getdealerreviews',
    content: `curl -X GET "https://capstone-developer-3030.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/fetchReviews/dealer/15"

[
  {
    "_id": "64bc7a5fb1d20011a0ea4c13",
    "id": 1,
    "name": "Berkly Shepley",
    "dealership": 15,
    "review": "Total grid-enabled service-desk. The service was fast and the sales representatives were very knowledgeable.",
    "time": "2026-05-28T22:30:15.000Z",
    "purchase": true,
    "purchase_date": "07/11/2020",
    "car_make": "Audi",
    "car_model": "A6",
    "car_year": 2010,
    "sentiment": "positive"
  }
]`
  },
  {
    id: 'task-9',
    taskNum: 9,
    title: 'cURL: Get All Dealerships',
    type: 'terminal',
    filename: 'getalldealers',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/getalldealers',
    content: `curl -X GET "https://capstone-developer-3030.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/fetchDealers"

[
  { "id": 1, "city": "El Paso", "state": "Texas", "address": "4020 Texas St", "zip": "79901", "zip_code": "79901", "lat": 31.7619, "latitude": 31.7619, "lng": -106.4850, "longitude": -106.4850, "short_name": "EP Dealership", "full_name": "El Paso Cars Center" },
  { "id": 2, "city": "San Francisco", "state": "California", "address": "500 California St", "zip": "94104", "zip_code": "94104", "lat": 37.7946, "latitude": 37.7946, "lng": -122.4018, "longitude": -122.4018, "short_name": "SF Auto", "full_name": "San Francisco Premium Motors" },
  { "id": 3, "city": "New York", "state": "New York", "address": "120 Broadway", "zip": "10271", "zip_code": "10271", "lat": 40.7081, "latitude": 40.7081, "lng": -74.0110, "longitude": -74.0110, "short_name": "NY Dealership", "full_name": "Manhattan Chrysler Jeep Dodge" },
  { "id": 4, "city": "Los Angeles", "state": "California", "address": "1900 S Figueroa St", "zip": "90007", "zip_code": "90007", "lat": 34.0298, "latitude": 34.0298, "lng": -118.2731, "longitude": -118.2731, "short_name": "LA Ford", "full_name": "Downtown Los Angeles Ford" },
  { "id": 5, "city": "Chicago", "state": "Illinois", "address": "1100 N Clark St", "zip": "60610", "zip_code": "60610", "lat": 41.9023, "latitude": 41.9023, "lng": -87.6315, "longitude": -87.6315, "short_name": "Windy City Motors", "full_name": "Chicago Lakeshore Chevrolet" },
  { "id": 6, "city": "Houston", "state": "Texas", "address": "2900 Gulf Fwy", "zip": "77003", "zip_code": "77003", "lat": 29.7424, "latitude": 29.7424, "lng": -95.3496, "longitude": -95.3496, "short_name": "Houston Auto", "full_name": "Houston Metropolitan Toyota" },
  { "id": 7, "city": "Phoenix", "state": "Arizona", "address": "1200 E Camelback Rd", "zip": "85014", "zip_code": "85014", "lat": 33.5097, "latitude": 33.5097, "lng": -112.0558, "longitude": -112.0558, "short_name": "Phoenix Hyundai", "full_name": "Valley of the Sun Hyundai" },
  { "id": 8, "city": "Philadelphia", "state": "Pennsylvania", "address": "2100 Market St", "zip": "19103", "zip_code": "19103", "lat": 39.9542, "latitude": 39.9542, "lng": -75.1755, "longitude": -75.1755, "short_name": "Philly Premier", "full_name": "Philadelphia Premier Honda" },
  { "id": 9, "city": "San Antonio", "state": "Texas", "address": "1500 San Pedro Ave", "zip": "78212", "zip_code": "78212", "lat": 29.4449, "latitude": 29.4449, "lng": -98.4981, "longitude": -98.4981, "short_name": "Alamo City Cars", "full_name": "San San Antonio Alamo Nissan" },
  { "id": 10, "city": "San Diego", "state": "California", "address": "3200 Pacific Hwy", "zip": "92101", "zip_code": "92101", "lat": 32.7303, "latitude": 32.7303, "lng": -117.1791, "longitude": -117.1791, "short_name": "SD Bay Subaru", "full_name": "San Diego Bay Subaru" },
  { "id": 11, "city": "Dallas", "state": "Texas", "address": "4200 Lemmon Ave", "zip": "75219", "zip_code": "75219", "lat": 32.8164, "latitude": 32.8164, "lng": -96.8080, "longitude": -96.8080, "short_name": "Lemmon Cadillac", "full_name": "Dallas Lemmon Avenue Cadillac" },
  { "id": 12, "city": "Austin", "state": "Texas", "address": "2400 S Interstate 35", "zip": "78704", "zip_code": "78704", "lat": 30.2372, "latitude": 30.2372, "lng": -97.7538, "longitude": -97.7538, "short_name": "Austin Luxury", "full_name": "Austin South Lexus" },
  { "id": 13, "city": "Jacksonville", "state": "Florida", "address": "3400 Atlantic Blvd", "zip": "32207", "zip_code": "32207", "lat": 30.3164, "latitude": 30.3164, "lng": -81.6163, "longitude": -81.6163, "short_name": "Jax Motors", "full_name": "Jacksonville Atlantic Kia" },
  { "id": 14, "city": "Indianapolis", "state": "Indiana", "address": "5300 N Keystone Ave", "zip": "46220", "zip_code": "46220", "lat": 39.8499, "latitude": 39.8499, "lng": -86.1215, "longitude": -86.1215, "short_name": "Indy Keystone Auto", "full_name": "Indianapolis Keystone Buick" },
  { "id": 15, "city": "Topeka", "state": "Kansas", "address": "1200 Kansas Ave", "zip": "66612", "zip_code": "66612", "lat": 39.0473, "latitude": 39.0473, "lng": -95.6752, "longitude": -95.6752, "short_name": "Topeka Motors", "full_name": "Topeka Best Cars Dealership" },
  { "id": 16, "city": "San Jose", "state": "California", "address": "1600 Stevens Creek Blvd", "zip": "95129", "zip_code": "95129", "lat": 37.3235, "latitude": 37.3235, "lng": -121.9822, "longitude": -121.9822, "short_name": "San Jose Acura", "full_name": "Stevens Creek Acura" },
  { "id": 17, "city": "Columbus", "state": "Ohio", "address": "2900 Morse Rd", "zip": "43231", "zip_code": "43231", "lat": 40.0612, "latitude": 40.0612, "lng": -82.9348, "longitude": -82.9348, "short_name": "Columbus Honda", "full_name": "Columbus Morse Road Honda" },
  { "id": 18, "city": "Charlotte", "state": "North Carolina", "address": "4300 South Blvd", "zip": "28209", "zip_code": "28209", "lat": 35.1872, "latitude": 35.1872, "lng": -80.8752, "longitude": -80.8752, "short_name": "Charlotte Auto Center", "full_name": "Queen City Chevrolet" },
  { "id": 19, "city": "Detroit", "state": "Michigan", "address": "18100 Woodward Ave", "zip": "48203", "zip_code": "48203", "lat": 42.4243, "latitude": 42.4243, "lng": -83.1118, "longitude": -83.1118, "short_name": "Motor City Ford", "full_name": "Detroit Woodward Avenue Ford" },
  { "id": 20, "city": "Memphis", "state": "Tennessee", "address": "1900 Covington Pike", "zip": "38128", "zip_code": "38128", "lat": 35.1966, "latitude": 35.1966, "lng": -89.8837, "longitude": -89.8837, "short_name": "Memphis Toyota", "full_name": "Covington Pike Toyota" },
  { "id": 21, "city": "Seattle", "state": "Washington", "address": "2100 Westlake Ave", "zip": "98121", "zip_code": "98121", "lat": 47.6171, "latitude": 47.6171, "lng": -122.3391, "longitude": -122.3391, "short_name": "Seattle Volvo", "full_name": "Seattle Westlake Volvo" },
  { "id": 22, "city": "Denver", "state": "Colorado", "address": "1100 Federal Blvd", "zip": "80204", "zip_code": "80204", "lat": 39.7340, "latitude": 39.7340, "lng": -105.0253, "longitude": -105.0253, "short_name": "Mile High Motors", "full_name": "Denver Federal Boulevard Dodge" },
  { "id": 23, "city": "Boston", "state": "Massachusetts", "address": "1000 Commonwealth Ave", "zip": "02215", "zip_code": "02215", "lat": 42.3496, "latitude": 42.3496, "lng": -71.1234, "longitude": -71.1234, "short_name": "Boston Audi", "full_name": "Boston Commonwealth Audi" },
  { "id": 24, "city": "Baltimore", "state": "Maryland", "address": "1500 Belair Rd", "zip": "21213", "zip_code": "21213", "lat": 39.3190, "latitude": 39.3190, "lng": -76.5742, "longitude": -76.5742, "short_name": "Baltimore Auto Group", "full_name": "Baltimore Belair Ford" },
  { "id": 25, "city": "Nashville", "state": "Tennessee", "address": "2300 Gallatin Pike N", "zip": "37115", "zip_code": "37115", "lat": 36.2731, "latitude": 36.2731, "lng": -86.7112, "longitude": -86.7112, "short_name": "Music City Nissan", "full_name": "Nashville Madison Nissan" },
  { "id": 26, "city": "Miami", "state": "Florida", "address": "2001 Biscayne Blvd", "zip": "33137", "zip_code": "33137", "lat": 25.7959, "latitude": 25.7959, "lng": -80.1901, "longitude": -80.1901, "short_name": "Miami Prestige", "full_name": "Prestige BMW of Miami" },
  { "id": 27, "city": "Las Vegas", "state": "Nevada", "address": "5550 Sahara Ave", "zip": "89146", "zip_code": "89146", "lat": 36.1436, "latitude": 36.1436, "lng": -115.2173, "longitude": -115.2173, "short_name": "Sahara Hyundai", "full_name": "Sahara Hyundai Las Vegas" },
  { "id": 28, "city": "Portland", "state": "Oregon", "address": "1000 SW 10th Ave", "zip": "97205", "zip_code": "97205", "lat": 45.5186, "latitude": 45.5186, "lng": -122.6811, "longitude": -122.6811, "short_name": "Portland Subaru", "full_name": "Downtown Portland Subaru" },
  { "id": 29, "city": "Wichita", "state": "Kansas", "address": "1500 E Douglas Ave", "zip": "67214", "zip_code": "67214", "lat": 37.6865, "latitude": 37.6865, "lng": -97.3192, "longitude": -97.3192, "short_name": "Wichita Cars", "full_name": "Wichita Auto Outlet" },
  { "id": 30, "city": "Louisville", "state": "Kentucky", "address": "4000 Shelbyville Rd", "zip": "40207", "zip_code": "40207", "lat": 38.2505, "latitude": 38.2505, "lng": -85.6412, "longitude": -85.6412, "short_name": "Louisville Chrysler", "full_name": "Shelbyville Road Chrysler" },
  { "id": 31, "city": "Milwaukee", "state": "Wisconsin", "address": "12800 W Capitol Dr", "zip": "53005", "zip_code": "53005", "lat": 43.0898, "latitude": 43.0898, "lng": -88.0691, "longitude": -88.0691, "short_name": "Milwaukee Jeep", "full_name": "Wisconsin Capitol Drive Jeep" },
  { "id": 32, "city": "Albuquerque", "state": "New Mexico", "address": "8800 Lomas Blvd NE", "zip": "87112", "zip_code": "87112", "lat": 35.0872, "latitude": 35.0872, "lng": -106.5492, "longitude": -106.5492, "short_name": "Albuquerque Kia", "full_name": "Lomas Boulevard Kia" },
  { "id": 33, "city": "Tucson", "state": "Arizona", "address": "4200 E 22nd St", "zip": "85711", "zip_code": "85711", "lat": 32.2065, "latitude": 32.2065, "lng": -110.8992, "longitude": -110.8992, "short_name": "Tucson Car Outlet", "full_name": "Tucson National Auto" },
  { "id": 34, "city": "Fresno", "state": "California", "address": "5200 N Blackstone Ave", "zip": "93710", "zip_code": "93710", "lat": 36.8118, "latitude": 36.8118, "lng": -119.7891, "longitude": -119.7891, "short_name": "Fresno Lexus", "full_name": "Blackstone Avenue Lexus" },
  { "id": 35, "city": "Sacramento", "state": "California", "address": "3300 Auburn Blvd", "zip": "95821", "zip_code": "95821", "lat": 38.6253, "latitude": 38.6253, "lng": -121.3912, "longitude": -121.3912, "short_name": "Sacramento Ford", "full_name": "Auburn Boulevard Ford Store" },
  { "id": 36, "city": "Kansas City", "state": "Kansas", "address": "7800 State Ave", "zip": "66112", "zip_code": "66112", "lat": 39.1165, "latitude": 39.1165, "lng": -94.7643, "longitude": -94.7643, "short_name": "Mercury Chrysler", "full_name": "Kansas City Best Chrysler" },
  { "id": 37, "city": "Mesa", "state": "Arizona", "address": "1500 Motor Dr", "zip": "85206", "zip_code": "85206", "lat": 33.4150, "latitude": 33.4150, "lng": -111.7580, "longitude": -111.7580, "short_name": "Mesa Chevrolet", "full_name": "Mesa Superstore Chevrolet" },
  { "id": 38, "city": "Atlanta", "state": "Georgia", "address": "2500 Peachtree Rd NE", "zip": "30305", "zip_code": "30305", "lat": 33.8236, "latitude": 33.8236, "lng": -84.3824, "longitude": -84.3824, "short_name": "Peachtree Cadillac", "full_name": "Peachtree Cadillac Atlanta" },
  { "id": 39, "city": "Kansas City", "state": "Missouri", "address": "100 Ward Pkwy", "zip": "64112", "zip_code": "64112", "lat": 39.0436, "latitude": 39.0436, "lng": -94.5901, "longitude": -94.5901, "short_name": "Ward Parkway Mazda", "full_name": "Kansas City Ward Parkway Mazda" },
  { "id": 40, "city": "Omaha", "state": "Nebraska", "address": "3600 L St", "zip": "68107", "zip_code": "68107", "lat": 41.2062, "latitude": 41.2062, "lng": -95.9664, "longitude": -95.9664, "short_name": "Omaha Chrysler", "full_name": "Omaha National Dodge Ram" },
  { "id": 41, "city": "Raleigh", "state": "North Carolina", "address": "4000 Glenwood Ave", "zip": "27612", "zip_code": "27612", "lat": 35.8452, "latitude": 35.8452, "lng": -78.6946, "longitude": -78.6946, "short_name": "Raleigh Jaguar", "full_name": "Raleigh Glenwood Avenue Jaguar" },
  { "id": 42, "city": "Colorado Springs", "state": "Colorado", "address": "1200 Motor City Dr", "zip": "80905", "zip_code": "80905", "lat": 38.8142, "latitude": 38.8142, "lng": -104.8340, "longitude": -104.8340, "short_name": "Springs Volkswagen", "full_name": "Colorado Springs Volkswagen" },
  { "id": 43, "city": "Miami", "state": "Florida", "address": "1200 S Dixie Hwy", "zip": "33146", "zip_code": "33146", "lat": 25.7123, "latitude": 25.7123, "lng": -80.2641, "longitude": -80.2641, "short_name": "Dixie Mercedes", "full_name": "Mercedes Benz of Coral Gables" },
  { "id": 44, "city": "Oakland", "state": "California", "address": "3000 Broadway", "zip": "94611", "zip_code": "94611", "lat": 37.8186, "latitude": 37.8186, "lng": -122.2592, "longitude": -122.2592, "short_name": "Oakland Premium Auto", "full_name": "Broadway Premium Motors" },
  { "id": 45, "city": "Minneapolis", "state": "Minnesota", "address": "500 Wayzata Blvd", "zip": "55403", "zip_code": "55403", "lat": 44.9752, "latitude": 44.9752, "lng": -93.2982, "longitude": -93.2982, "short_name": "Wayzata Nissan", "full_name": "Minneapolis Wayzata Chrysler" },
  { "id": 46, "city": "Tulsa", "state": "Oklahoma", "address": "4700 S Memorial Dr", "zip": "74145", "zip_code": "74145", "lat": 36.1018, "latitude": 36.1018, "lng": -95.8852, "longitude": -95.8852, "short_name": "Tulsa Chevrolet", "full_name": "Tulsa Memorial Drive Chevrolet" },
  { "id": 47, "city": "Cleveland", "state": "Ohio", "address": "13000 Brookpark Rd", "zip": "44135", "zip_code": "44135", "lat": 41.4172, "latitude": 41.4172, "lng": -81.8211, "longitude": -81.8211, "short_name": "Cleveland Jeep", "full_name": "Cleveland Brookpark Dodge Jeep" },
  { "id": 48, "city": "Tampa", "state": "Florida", "address": "1100 N Florida Ave", "zip": "33602", "zip_code": "33602", "lat": 27.9542, "latitude": 27.9542, "lng": -82.4578, "longitude": -82.4578, "short_name": "Tampa Premium Audi", "full_name": "Tampa Florida Avenue Audi" },
  { "id": 49, "city": "Honolulu", "state": "Hawaii", "address": "2850 Ala Moana Blvd", "zip": "96815", "zip_code": "96815", "lat": 21.2891, "latitude": 21.2891, "lng": -157.8423, "longitude": -157.8423, "short_name": "Honolulu BMW", "full_name": "Ala Moana Pride BMW" },
  { "id": 50, "city": "Salt Lake City", "state": "Utah", "address": "1500 S State St", "zip": "84115", "zip_code": "84115", "lat": 40.7306, "latitude": 40.7306, "lng": -111.8882, "longitude": -111.8882, "short_name": "SLC Premium Auto", "full_name": "Utah Premier Motors" }
]`
  },
  {
    id: 'task-10',
    taskNum: 10,
    title: 'cURL: Get Dealer By ID',
    type: 'terminal',
    filename: 'getdealerbyid',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/getdealerbyid',
    content: `curl -X GET "https://capstone-developer-3030.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/fetchDealer/15"

{
  "id": 15,
  "city": "Topeka",
  "state": "Kansas",
  "address": "1200 Kansas Ave",
  "zip": "66612",
  "lat": 39.0473,
  "short_name": "Topeka Motors",
  "full_name": "Topeka Best Cars Dealership"
}`
  },
  {
    id: 'task-11',
    taskNum: 11,
    title: 'cURL: Get Dealers By State (Kansas)',
    type: 'terminal',
    filename: 'getdealersbyState',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/getdealersbyState',
    content: `curl -X GET "https://capstone-developer-3030.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/fetchDealers/Kansas"

[
  {
    "id": 15,
    "city": "Topeka",
    "state": "Kansas",
    "address": "1200 Kansas Ave",
    "zip": "66612",
    "lat": 39.0473,
    "short_name": "Topeka Motors",
    "full_name": "Topeka Best Cars Dealership"
  },
  {
    "id": 29,
    "city": "Wichita",
    "state": "Kansas",
    "address": "1500 E Douglas Ave",
    "zip": "67214",
    "lat": 37.6865,
    "short_name": "Wichita Cars",
    "full_name": "Wichita Auto Outlet"
  }
]`
  },  {
    id: 'task-14-15',
    taskNum: 14,
    title: 'cURL: Get SQLite Car Makes & Models Database',
    type: 'terminal',
    filename: 'getallcarmakes',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/getallcarmakes',
    content: `curl -X GET "https://capstone-developer-8000.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/djangoapp/get_cars"

{
  "CarModels": [
    {
      "id": 1,
      "make": "Audi",
      "model": "A6",
      "type": "SEDAN",
      "year": 2010
    },
    {
      "id": 2,
      "make": "Audi",
      "model": "Q7",
      "type": "SUV",
      "year": 2018
    },
    {
      "id": 3,
      "make": "Audi",
      "model": "A4",
      "type": "SEDAN",
      "year": 2015
    },
    {
      "id": 4,
      "make": "Toyota",
      "model": "Camry",
      "type": "SEDAN",
      "year": 2021
    },
    {
      "id": 5,
      "make": "Toyota",
      "model": "RAV4",
      "type": "SUV",
      "year": 2022
    },
    {
      "id": 6,
      "make": "Toyota",
      "model": "Sienna",
      "type": "WAGON",
      "year": 2020
    }
  ]
}`
  },,
  {
    id: 'task-16',
    taskNum: 16,
    title: 'cURL: Sentiment Analysis Endpoint',
    type: 'terminal',
    filename: 'analyzereview',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/analyzereview',
    content: `curl -X GET "https://sentiment-analyzer.codeengine.appdomain.cloud/analyze/Fantastic%20services"

{
  "sentiment": "positive",
  "score": 0.957,
  "label": "positive"
}`
  },
  {
    id: 'task-23',
    taskNum: 23,
    title: 'CI/CD Pipeline Outputs',
    type: 'terminal',
    filename: 'CICD',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/CICD',
    content: `Run GitHub Actions Workspace CI/CD check workflow
Run actions/checkout@v3
  with:
    persist-credentials: false
    clean: true
    fetch-depth: 1
  /usr/bin/git config --global --add safe.directory /github/workspace
  /usr/bin/git init
  /usr/bin/git remote add origin https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS.git
  /usr/bin/git fetch --no-tags --prune --progress --no-recurse-submodules --depth=1 origin +refs/heads/main:refs/remotes/origin/main
  /usr/bin/git checkout --progress --force -B main refs/remotes/origin/main

Run Python Setup Environment Check
  Python Version: 3.10.12
  Pip Version: 23.2.1

Run pip3 install flake8 pytest
  Installing collected packages: flake8, pytest, pycodestyle, pyflakes, pluggy, iniconfig, exceptiongroup
  Successfully installed exceptiongroup-1.2.0 flake8-6.1.0 iniconfig-2.0.0 pluggy-1.3.0 pycodestyle-2.11.1 pyflakes-3.1.0 pytest-7.4.3

Run flake8 linting check
  shell: /usr/bin/bash -e {0}
  Running: flake8 server --count --select=E9,F63,F7,F82 --show-source --statistics
  0
  Running: flake8 server --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
  0
  Status: GitHub Actions linter checks passed successfully.

Run pytest unit-tests module
  shell: /usr/bin/bash -e {0}
  ============================= test session starts ==============================
  platform linux -- Python 3.10.12, pytest-7.4.3, pluggy-1.3.0
  rootdir: /github/workspace/server
  collected 12 items

  tests/test_models.py ............                                         [100%]

  ============================== 12 passed in 1.45s ==============================
  Status: All unit tests passed! Done.`
  },
  {
    id: 'task-24',
    taskNum: 24,
    title: 'Cloud Deployment Endpoint',
    type: 'text',
    filename: 'deploymentURL',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/deploymentURL',
    content: `https://briangator.github.io/Full-Stack-Car-Dealer-Capstone-Python-JS/`
  },
  {
    id: 'task-12',
    taskNum: 12,
    title: 'Django Admin Portal Sign-In Screenshot',
    type: 'image-placeholder',
    filename: 'admin_login.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/admin_login.png',
    content: 'DJANGO_ADMIN_LOGIN'
  },
  {
    id: 'task-13',
    taskNum: 13,
    title: 'Django Admin Portal Log-Out Screenshot',
    type: 'image-placeholder',
    filename: 'admin_logout.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/admin_logout.png',
    content: 'DJANGO_ADMIN_LOGOUT'
  },
  {
    id: 'task-17',
    taskNum: 17,
    title: 'Dealers Portal Landing Page View',
    type: 'image-placeholder',
    filename: 'get_dealers.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/get_dealers.png',
    content: 'DEALERS_LANDING'
  },
  {
    id: 'task-18',
    taskNum: 18,
    title: 'Dealers Portal Active Login View',
    type: 'image-placeholder',
    filename: 'get_dealers_loggedin.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/get_dealers_loggedin.png',
    content: 'DEALERS_LOGGEDIN'
  },
  {
    id: 'task-19',
    taskNum: 19,
    title: 'Dealers Filtered by State View',
    type: 'image-placeholder',
    filename: 'dealersbystate.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/dealersbystate.png',
    content: 'DEALERS_FILTERED'
  },
  {
    id: 'task-20',
    taskNum: 20,
    title: 'Specific Dealership Reviews Detail View',
    type: 'image-placeholder',
    filename: 'dealer_id_reviews.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/dealer_id_reviews.png',
    content: 'DEALER_REVIEWS'
  },
  {
    id: 'task-21',
    taskNum: 21,
    title: 'Post Review Form Component View',
    type: 'image-placeholder',
    filename: 'dealership_review_submission.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/dealership_review_submission.png',
    content: 'DEALER_REVIEW_FORM'
  },
  {
    id: 'task-22',
    taskNum: 22,
    title: 'Post Review Sentiment Verification View',
    type: 'image-placeholder',
    filename: 'added_review.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/added_review.png',
    content: 'DEALER_REVIEW_ADDED'
  },
  {
    id: 'task-25',
    taskNum: 25,
    title: 'Deployed Landing Page Verification',
    type: 'image-placeholder',
    filename: 'deployed_landingpage.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/deployed_landingpage.png',
    content: 'DEPLOYED_LANDING'
  },
  {
    id: 'task-26',
    taskNum: 26,
    title: 'Deployed Session Authentication State',
    type: 'image-placeholder',
    filename: 'deployed_loggedin.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/deployed_loggedin.png',
    content: 'DEPLOYED_LOGGEDIN'
  },
  {
    id: 'task-27',
    taskNum: 27,
    title: 'Deployed Dealer Details Verification',
    type: 'image-placeholder',
    filename: 'deployed_dealer_detail.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/deployed_dealer_detail.png',
    content: 'DEPLOYED_DEALER_DETAIL'
  },
  {
    id: 'task-28',
    taskNum: 28,
    title: 'Deployed Live Review Posting Verification',
    type: 'image-placeholder',
    filename: 'deployed_add_review.png',
    githubUrl: 'https://github.com/BrianGator/Full-Stack-Car-Dealer-Capstone-Python-JS/blob/main/Project-Deliverables/deployed_add_review.png',
    content: 'DEPLOYED_ADD_REVIEW'
  }
];

export interface Dealership {
  id: number;
  city: string;
  state: string;
  address: string;
  zip: string;
  lat: number;
  short_name: string;
  full_name: string;
}

export const staticDealers: Dealership[] = [
  {
    id: 1,
    city: "El Paso",
    state: "Texas",
    address: "4020 Texas St",
    zip: "79901",
    lat: 31.7619,
    short_name: "EP Dealership",
    full_name: "El Paso Cars Center"
  },
  {
    id: 2,
    city: "San Francisco",
    state: "California",
    address: "500 California St",
    zip: "94104",
    lat: 37.7946,
    short_name: "SF Auto",
    full_name: "San Francisco Premium Motors"
  },
  {
    id: 15,
    city: "Topeka",
    state: "Kansas",
    address: "1200 Kansas Ave",
    zip: "66612",
    lat: 39.0473,
    short_name: "Topeka Motors",
    full_name: "Topeka Best Cars Dealership"
  },
  {
    id: 29,
    city: "Wichita",
    state: "Kansas",
    address: "1500 E Douglas Ave",
    zip: "67214",
    lat: 37.6865,
    short_name: "Wichita Cars",
    full_name: "Wichita Auto Outlet"
  },
  {
    id: 42,
    city: "Kansas City",
    state: "Kansas",
    address: "12 Maplewood Dr.",
    zip: "66101",
    lat: 39.1141,
    short_name: "Sunward Auto Sales",
    full_name: "Sunward Auto Sales Kansas City"
  },
  {
    id: 50,
    city: "Tampa",
    state: "Florida",
    address: "202 N Tampa St",
    zip: "33602",
    lat: 27.9475,
    short_name: "Tampa Auto Gallery",
    full_name: "Best Cars Tampa Luxury Center"
  },
  {
    id: 51,
    city: "Clearwater Beach",
    state: "Florida",
    address: "415 Gulfview Blvd",
    zip: "33767",
    lat: 27.9734,
    short_name: "Clearwater Beach Auto",
    full_name: "Clearwater Beach Premium Cars"
  },
  {
    id: 52,
    city: "St Pete Beach",
    state: "Florida",
    address: "3400 Gulf Blvd",
    zip: "33706",
    lat: 27.7253,
    short_name: "St Pete Beach Motors",
    full_name: "St Pete Beach Signature Auto"
  },
  {
    id: 53,
    city: "Orlando",
    state: "Florida",
    address: "8000 International Dr",
    zip: "32819",
    lat: 28.5383,
    short_name: "Orlando Auto Hub",
    full_name: "Orlando Best Cars Distributorship"
  },
  {
    id: 54,
    city: "West Palm Beach",
    state: "Florida",
    address: "2200 Okeechobee Blvd",
    zip: "33409",
    lat: 26.7153,
    short_name: "West Palm Motors",
    full_name: "West Palm Beach Signature Cars"
  },
  {
    id: 55,
    city: "Miami Beach",
    state: "Florida",
    address: "1500 Ocean Dr",
    zip: "33139",
    lat: 25.7907,
    short_name: "Miami Beach Exotic",
    full_name: "Miami Beach Elite Auto Center"
  },
  {
    id: 56,
    city: "Ft Lauderdale Beach",
    state: "Florida",
    address: "2400 E Las Olas Blvd",
    zip: "33301",
    lat: 26.1192,
    short_name: "Ft Lauderdale Beach Auto",
    full_name: "Ft Lauderdale Beach Motors Studio"
  },
  {
    id: 57,
    city: "Siesta Key Beach",
    state: "Florida",
    address: "948 Beach Rd",
    zip: "34242",
    lat: 27.2662,
    short_name: "Siesta Key Beach Cars",
    full_name: "Siesta Key Beach Coastal Elite Motors"
  },
  {
    id: 58,
    city: "Naples Beach",
    state: "Florida",
    address: "850 Gulf Shore Blvd N",
    zip: "34102",
    lat: 26.1420,
    short_name: "Naples Gulf Beach Auto",
    full_name: "Naples Beach Luxury Outlet"
  },
  {
    id: 60,
    city: "Houston",
    state: "Texas",
    address: "1500 Louisiana St",
    zip: "77002",
    lat: 29.7589,
    short_name: "Houston Gulf Motors",
    full_name: "Best Cars Houston Elite Center"
  },
  {
    id: 61,
    city: "Los Angeles",
    state: "California",
    address: "10250 Santa Monica Blvd",
    zip: "90067",
    lat: 34.0522,
    short_name: "LA Westside Cars",
    full_name: "LA Prestige Motorcars Studio"
  },
  {
    id: 62,
    city: "San Diego",
    state: "California",
    address: "450 B St",
    zip: "92101",
    lat: 32.7157,
    short_name: "SD Coastal Auto",
    full_name: "San Diego Signature Port"
  },
  {
    id: 63,
    city: "Silicon Valley",
    state: "California",
    address: "3000 Sand Hill Rd",
    zip: "94025",
    lat: 37.4419,
    short_name: "SV Tech Motors",
    full_name: "Silicon Valley Advanced Auto"
  },
  {
    id: 64,
    city: "Seattle",
    state: "Washington",
    address: "500 Pine St",
    zip: "98101",
    lat: 47.6062,
    short_name: "Seattle Emerald Auto",
    full_name: "Seattle Best Cars Gateway"
  },
  {
    id: 65,
    city: "New York",
    state: "New York",
    address: "10 Columbus Cir",
    zip: "10019",
    lat: 40.7128,
    short_name: "NYC Manhattan Auto",
    full_name: "New York City Flagship Center"
  },
  {
    id: 66,
    city: "Boston",
    state: "Massachusetts",
    address: "800 Boylston St",
    zip: "02199",
    lat: 42.3584,
    short_name: "Boston Back Bay Cars",
    full_name: "Boston Back Bay Luxury Auto"
  },
  {
    id: 67,
    city: "New Orleans",
    state: "Louisiana",
    address: "701 Poydras St",
    zip: "70139",
    lat: 29.9511,
    short_name: "NOLA Crescent Cars",
    full_name: "New Orleans Crescent City Motors"
  },
  {
    id: 68,
    city: "Dallas",
    state: "Texas",
    address: "1717 Leonard St",
    zip: "75201",
    lat: 32.7767,
    short_name: "Dallas Arts Motors",
    full_name: "Best Cars Dallas Metro Center"
  },
  {
    id: 69,
    city: "Austin",
    state: "Texas",
    address: "100 Congress Ave",
    zip: "78701",
    lat: 30.2672,
    short_name: "Austin Capitol Auto",
    full_name: "Austin Best Cars Tech Junction"
  },
  {
    id: 70,
    city: "Nashville",
    state: "Tennessee",
    address: "700 Broadway",
    zip: "37203",
    lat: 36.1627,
    short_name: "Nashville Music Motors",
    full_name: "Nashville Best Cars Music Square"
  }
];

export interface Review {
  id: number;
  name: string;
  dealership: number;
  review: string;
  time: string;
  purchase: boolean;
  purchase_date: string;
  car_make: string;
  car_model: string;
  car_year: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  stars: number;
  response?: string;
}

export const initialReviews: Review[] = [
  {
    id: 1,
    name: "Berkly Shepley",
    dealership: 15,
    review: "Total grid-enabled service-desk. The service was fast and the sales representatives were very knowledgeable.",
    time: "2026-05-28T22:30:15.000Z",
    purchase: true,
    purchase_date: "07/11/2020",
    car_make: "Audi",
    car_model: "A6",
    car_year: 2010,
    sentiment: "positive",
    stars: 5,
    response: "Thank you Berkly! We always strive to provide a top-tier service desk experience. Enjoy your Audi A6!"
  },
  {
    id: 2,
    name: "Gawain Dunnan",
    dealership: 15,
    review: "Decent collection and average customer care. Negotiations took slightly longer than expected.",
    time: "2026-05-28T20:15:30.000Z",
    purchase: false,
    purchase_date: "",
    car_make: "",
    car_model: "",
    car_year: 0,
    sentiment: "neutral",
    stars: 3,
    response: "We appreciate your feedback, Gawain. We are actively working on speeding up our financing negotiation timelines."
  },
  {
    id: 3,
    name: "Samantha Vance",
    dealership: 29,
    review: "The purchase experience was pleasant, but the wait to get papers cleared is slightly frustrating.",
    time: "2026-05-28T18:40:00.000Z",
    purchase: true,
    purchase_date: "12/04/2021",
    car_make: "Toyota",
    car_model: "Camry",
    car_year: 2021,
    sentiment: "positive",
    stars: 4,
    response: "Hi Samantha, thanks for the 4 stars. We are streamlining our post-sale documentation clearing to cut down on wait times!"
  },
  {
    id: 4,
    name: "Robert Miller",
    dealership: 1,
    review: "Very rude response on telephone. They did not have the listed Prius in inventory when I arrived.",
    time: "2026-05-27T10:20:00.000Z",
    purchase: false,
    purchase_date: "",
    car_make: "",
    car_model: "",
    car_year: 0,
    sentiment: "negative",
    stars: 1,
    response: "We are deeply sorry for the rude response, Robert. The Prius was sold right before you arrived but we should have notified you. We want to make it right."
  }
];

export interface Vehicle {
  id: number;
  dealershipId: number;
  make: string;
  model: string;
  year: number;
  miles: number;
  exteriorColor: string;
  interiorColor: string;
  doors: 2 | 4;
  type: string; // 'Sedan' | 'Coupe' | 'Convertible' | 'SUV' | 'Truck' | 'Minivan'
  price: number;
}

export const staticVehicles: Vehicle[] = [
  // 1. El Paso, TX (id: 1)
  { id: 101, dealershipId: 1, make: "Toyota", model: "Camry SE", year: 2021, miles: 32000, exteriorColor: "Silver", interiorColor: "Black", doors: 4, type: "Sedan", price: 23500 },
  { id: 102, dealershipId: 1, make: "Ford", model: "F-150 XLT", year: 2019, miles: 58000, exteriorColor: "Red", interiorColor: "Gray", doors: 4, type: "Truck", price: 34000 },
  
  // 2. San Francisco, CA (id: 2)
  { id: 103, dealershipId: 2, make: "Tesla", model: "Model S", year: 2023, miles: 12000, exteriorColor: "White", interiorColor: "White", doors: 4, type: "Sedan", price: 79000 },
  { id: 104, dealershipId: 2, make: "BMW", model: "M4 Coupe", year: 2022, miles: 18000, exteriorColor: "Black", interiorColor: "Red", doors: 2, type: "Coupe", price: 68500 },

  // 15. Topeka, KS (id: 15)
  { id: 105, dealershipId: 15, make: "Audi", model: "A6 Sport", year: 2020, miles: 45000, exteriorColor: "Gray", interiorColor: "Black", doors: 4, type: "Sedan", price: 38000 },
  { id: 106, dealershipId: 15, make: "Honda", model: "Odyssey Elite", year: 2018, miles: 72000, exteriorColor: "Blue", interiorColor: "Beige", doors: 4, type: "Minivan", price: 26900 },

  // 29. Wichita, KS (id: 29)
  { id: 107, dealershipId: 29, make: "Toyota", model: "RAV4 Hybrid", year: 2022, miles: 15000, exteriorColor: "Blue", interiorColor: "Grey", doors: 4, type: "SUV", price: 32500 },
  { id: 108, dealershipId: 29, make: "Ford", model: "Mustang GT", year: 2015, miles: 85000, exteriorColor: "Orange", interiorColor: "Black", doors: 2, type: "Coupe", price: 22000 },

  // 42. Kansas City, KS (id: 42)
  { id: 109, dealershipId: 42, make: "Mercedes-Benz", model: "GLC 300", year: 2021, miles: 28000, exteriorColor: "Black", interiorColor: "Brown", doors: 4, type: "SUV", price: 44000 },

  // 50. Tampa, FL (id: 50)
  { id: 110, dealershipId: 50, make: "BMW", model: "430i Convertible", year: 2022, miles: 9500, exteriorColor: "White", interiorColor: "Tan", doors: 2, type: "Convertible", price: 49800 },
  { id: 111, dealershipId: 50, make: "Tesla", model: "Model Y Long Range", year: 2023, miles: 14000, exteriorColor: "Blue", interiorColor: "Black", doors: 4, type: "SUV", price: 47500 },

  // 51. Clearwater Beach, FL (id: 51)
  { id: 112, dealershipId: 51, make: "Ford", model: "Mustang EcoBoost", year: 2021, miles: 21000, exteriorColor: "Yellow", interiorColor: "Black", doors: 2, type: "Convertible", price: 29500 },

  // 52. St Pete Beach, FL (id: 52)
  { id: 113, dealershipId: 52, make: "Jeep", model: "Wrangler Rubicon", year: 2020, miles: 39000, exteriorColor: "Green", interiorColor: "Black", doors: 2, type: "SUV", price: 38900 },

  // 53. Orlando, FL (id: 53)
  { id: 114, dealershipId: 53, make: "Toyota", model: "Sienna Platinum", year: 2021, miles: 41000, exteriorColor: "Silver", interiorColor: "Beige", doors: 4, type: "Minivan", price: 42000 },
  { id: 115, dealershipId: 53, make: "Honda", model: "Civic Type R", year: 2021, miles: 16000, exteriorColor: "Red", interiorColor: "Red", doors: 4, type: "Hatchback", price: 39500 },

  // 54. West Palm Beach, FL (id: 54)
  { id: 116, dealershipId: 54, make: "Mercedes-Benz", model: "E-Class Cabriolet", year: 2020, miles: 24000, exteriorColor: "Gray", interiorColor: "Red", doors: 2, type: "Convertible", price: 55000 },

  // 55. Miami Beach, FL (id: 55)
  { id: 117, dealershipId: 55, make: "Chevrolet", model: "Corvette Stingray", year: 2022, miles: 4500, exteriorColor: "Red", interiorColor: "Black", doors: 2, type: "Coupe", price: 76500 },
  { id: 118, dealershipId: 55, make: "Porsche", model: "911 Carrera", year: 2021, miles: 8200, exteriorColor: "Black", interiorColor: "Beige", doors: 2, type: "Coupe", price: 112000 },

  // 56. Ft Lauderdale Beach, FL (id: 56)
  { id: 119, dealershipId: 56, make: "BMW", model: "880i", year: 2022, miles: 11000, exteriorColor: "Blue", interiorColor: "White", doors: 2, type: "Convertible", price: 89000 },

  // 57. Siesta Key Beach, FL (id: 57)
  { id: 120, dealershipId: 57, make: "Toyota", model: "Highlander Limited", year: 2020, miles: 48000, exteriorColor: "Green", interiorColor: "Tan", doors: 4, type: "SUV", price: 35400 },

  // 58. Naples Beach, FL (id: 58)
  { id: 121, dealershipId: 58, make: "Lexus", model: "RX 350", year: 2021, miles: 22000, exteriorColor: "Silver", interiorColor: "Black", doors: 4, type: "SUV", price: 46000 },

  // 60. Houston, TX (id: 60)
  { id: 122, dealershipId: 60, make: "Ram", model: "1500 Laramie", year: 2020, miles: 35000, exteriorColor: "Black", interiorColor: "Black", doors: 4, type: "Truck", price: 41500 },
  { id: 123, dealershipId: 60, make: "Toyota", model: "Tundra SR5", year: 2021, miles: 29000, exteriorColor: "White", interiorColor: "Gray", doors: 4, type: "Truck", price: 44000 },

  // 61. Los Angeles, CA (id: 61)
  { id: 124, dealershipId: 61, make: "Tesla", model: "Model X", year: 2022, miles: 19000, exteriorColor: "Gray", interiorColor: "Black", doors: 4, type: "SUV", price: 82500 },
  { id: 125, dealershipId: 61, make: "Mercedes-Benz", model: "AMG GT", year: 2021, miles: 7500, exteriorColor: "Yellow", interiorColor: "Black", doors: 2, type: "Coupe", price: 95000 },

  // 62. San Diego, CA (id: 62)
  { id: 126, dealershipId: 62, make: "BMW", model: "Z4 Roadster", year: 2021, miles: 13000, exteriorColor: "Red", interiorColor: "White", doors: 2, type: "Convertible", price: 49500 },

  // 63. Silicon Valley, CA (id: 63)
  { id: 127, dealershipId: 63, make: "Tesla", model: "Model 3 Performance", year: 2023, miles: 5000, exteriorColor: "White", interiorColor: "Black", doors: 4, type: "Sedan", price: 45000 },
  { id: 128, dealershipId: 63, make: "Lucid", model: "Air Touring", year: 2022, miles: 8200, exteriorColor: "Silver", interiorColor: "Brown", doors: 4, type: "Sedan", price: 74900 },

  // 64. Seattle, WA (id: 64)
  { id: 129, dealershipId: 64, make: "Subaru", model: "Outback Onyx", year: 2022, miles: 16500, exteriorColor: "Green", interiorColor: "Gray", doors: 4, type: "SUV", price: 31900 },
  { id: 130, dealershipId: 64, make: "Honda", model: "Pilot Elite", year: 2020, miles: 43000, exteriorColor: "Steel Gray", interiorColor: "Black", doors: 4, type: "SUV", price: 33800 },

  // 65. New York, NY (id: 65)
  { id: 131, dealershipId: 65, make: "Audi", model: "e-tron GT", year: 2022, miles: 11000, exteriorColor: "Gray", interiorColor: "Black", doors: 4, type: "Sedan", price: 83000 },
  { id: 132, dealershipId: 65, make: "Volvo", model: "XC90 Recharge", year: 2021, miles: 33000, exteriorColor: "White", interiorColor: "Beige", doors: 4, type: "SUV", price: 54900 },

  // 66. Boston, MA (id: 66)
  { id: 133, dealershipId: 66, make: "Subaru", model: "Forester Limited", year: 2021, miles: 27000, exteriorColor: "Blue", interiorColor: "Black", doors: 4, type: "SUV", price: 28500 },

  // 67. New Orleans, LA (id: 67)
  { id: 134, dealershipId: 67, make: "Dodge", model: "Challenger Scat Pack", year: 2018, miles: 52000, exteriorColor: "Orange", interiorColor: "Black", doors: 2, type: "Coupe", price: 35900 },

  // 68. Dallas, TX (id: 68)
  { id: 135, dealershipId: 68, make: "Ford", model: "Explorer Timberline", year: 2022, miles: 19500, exteriorColor: "Carbon", interiorColor: "Green", doors: 4, type: "SUV", price: 41000 },
  { id: 136, dealershipId: 68, make: "Ford", model: "F-250 Super Duty", year: 2021, miles: 31000, exteriorColor: "Red", interiorColor: "Black", doors: 4, type: "Truck", price: 58500 },

  // 69. Austin, TX (id: 69)
  { id: 137, dealershipId: 69, make: "Tesla", model: "Cybertruck Foundation", year: 2024, miles: 1200, exteriorColor: "Cyber Silver", interiorColor: "Black", doors: 4, type: "Truck", price: 92000 },
  { id: 138, dealershipId: 69, make: "Honda", model: "Civic Hatchback", year: 2022, miles: 14500, exteriorColor: "Black", interiorColor: "Grey", doors: 4, type: "Hatchback", price: 24500 },

  // 70. Nashville, TN (id: 70)
  { id: 139, dealershipId: 70, make: "Chevrolet", model: "Tahoe RST", year: 2021, miles: 34000, exteriorColor: "Black", interiorColor: "Red", doors: 4, type: "SUV", price: 59900 },
  { id: 140, dealershipId: 70, make: "Ford", model: "F-150 Raptor", year: 2020, miles: 46000, exteriorColor: "Blue", interiorColor: "Black", doors: 4, type: "Truck", price: 61000 },

  // New Porsche Models
  { id: 141, dealershipId: 50, make: "Porsche", model: "Taycan 4S", year: 2023, miles: 4200, exteriorColor: "Silver", interiorColor: "Black", doors: 4, type: "Sedan", price: 104000 },
  { id: 142, dealershipId: 50, make: "Porsche", model: "Panamera GTS", year: 2022, miles: 12000, exteriorColor: "Black", interiorColor: "Red", doors: 4, type: "Sedan", price: 98000 },
  { id: 143, dealershipId: 55, make: "Porsche", model: "Macan S", year: 2021, miles: 18500, exteriorColor: "White", interiorColor: "Black", doors: 4, type: "SUV", price: 58900 },
  { id: 144, dealershipId: 55, make: "Porsche", model: "Cayenne Coupe", year: 2022, miles: 14000, exteriorColor: "Gray", interiorColor: "Tan", doors: 4, type: "SUV", price: 79500 },
  { id: 145, dealershipId: 50, make: "Porsche", model: "911 Carrera 4S", year: 2022, miles: 3100, exteriorColor: "Silver", interiorColor: "Black", doors: 2, type: "Coupe", price: 135000 },
  { id: 146, dealershipId: 52, make: "Porsche", model: "GT3 RS", year: 2023, miles: 980, exteriorColor: "Green", interiorColor: "Black", doors: 2, type: "Coupe", price: 279000 },
  { id: 147, dealershipId: 2, make: "Porsche", model: "718 Cayman S", year: 2021, miles: 11000, exteriorColor: "Yellow", interiorColor: "Black", doors: 2, type: "Coupe", price: 72000 },
  { id: 148, dealershipId: 2, make: "Porsche", model: "718 Boxster GTS", year: 2020, miles: 15500, exteriorColor: "Blue", interiorColor: "Grey", doors: 2, type: "Convertible", price: 68500 }
];
