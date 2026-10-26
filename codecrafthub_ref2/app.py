from flask import Flask, request, jsonify
import json
import os
from datetime import datetime

app = Flask(__name__)

DATA_FILE = "courses.json"
VALID_STATUSES = ["Not Started", "In Progress", "Completed"]


def load_courses():
    if not os.path.exists(DATA_FILE):
        with open(DATA_FILE, "w") as f:
            json.dump([], f)
    with open(DATA_FILE, "r") as f:
        return json.load(f)


def save_courses(courses):
    with open(DATA_FILE, "w") as f:
        json.dump(courses, f, indent=2)


def get_next_id(courses):
    if not courses:
        return 1
    return max(course["id"] for course in courses) + 1


def validate_course(data, is_update=False):
    errors = []

    if not is_update or "name" in data:
        if not data.get("name"):
            errors.append("Missing required field: name")

    if not is_update or "description" in data:
        if not data.get("description"):
            errors.append("Missing required field: description")

    if not is_update or "target_date" in data:
        target_date = data.get("target_date")
        if not target_date:
            errors.append("Missing required field: target_date")
        else:
            try:
                datetime.strptime(target_date, "%Y-%m-%d")
            except ValueError:
                errors.append("target_date must be in YYYY-MM-DD format")

    if not is_update or "status" in data:
        status = data.get("status")
        if not status:
            errors.append("Missing required field: status")
        elif status not in VALID_STATUSES:
            errors.append("Invalid status value. Must be: Not Started, In Progress, or Completed")

    return errors


@app.route("/", methods=["GET"])
def home():
    return "CodeCraftHub API is running!"


@app.route("/api/courses", methods=["GET"])
def get_courses():
    courses = load_courses()
    return jsonify(courses), 200


@app.route("/api/courses/<int:course_id>", methods=["GET"])
def get_course(course_id):
    courses = load_courses()
    course = next((c for c in courses if c["id"] == course_id), None)

    if not course:
        return jsonify({"error": "Course not found"}), 404

    return jsonify(course), 200


@app.route("/api/courses", methods=["POST"])
def add_course():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Request body must be JSON"}), 400

    errors = validate_course(data)
    if errors:
        return jsonify({"errors": errors}), 400

    courses = load_courses()

    new_course = {
        "id": get_next_id(courses),
        "name": data["name"],
        "description": data["description"],
        "target_date": data["target_date"],
        "status": data["status"],
        "created_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }

    courses.append(new_course)
    save_courses(courses)

    return jsonify(new_course), 201


@app.route("/api/courses/<int:course_id>", methods=["PUT"])
def update_course(course_id):
    data = request.get_json()

    if not data:
        return jsonify({"error": "Request body must be JSON"}), 400

    errors = validate_course(data, is_update=True)
    if errors:
        return jsonify({"errors": errors}), 400

    courses = load_courses()
    course = next((c for c in courses if c["id"] == course_id), None)

    if not course:
        return jsonify({"error": "Course not found"}), 404

    if "name" in data:
        course["name"] = data["name"]
    if "description" in data:
        course["description"] = data["description"]
    if "target_date" in data:
        course["target_date"] = data["target_date"]
    if "status" in data:
        course["status"] = data["status"]

    save_courses(courses)
    return jsonify(course), 200


@app.route("/api/courses/<int:course_id>", methods=["DELETE"])
def delete_course(course_id):
    courses = load_courses()
    course = next((c for c in courses if c["id"] == course_id), None)

    if not course:
        return jsonify({"error": "Course not found"}), 404

    courses = [c for c in courses if c["id"] != course_id]
    save_courses(courses)

    return jsonify({"message": "Course deleted successfully"}), 200


@app.route("/api/courses/stats", methods=["GET"])
def get_course_stats():
    courses = load_courses()

    stats = {
        "total_courses": len(courses),
        "Not Started": 0,
        "In Progress": 0,
        "Completed": 0
    }

    for course in courses:
        if course["status"] in stats:
            stats[course["status"]] += 1

    return jsonify(stats), 200


if __name__ == "__main__":
    print("CodeCraftHub API is starting...")
    print(f"Data will be stored in: {DATA_FILE}")
    print("API is available at: http://localhost:5000")
    app.run(debug=True, port=5000)