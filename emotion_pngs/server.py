"""
Flask server for emotion detection application.
Provides API endpoints for analyzing text emotions using Watson NLP service.
"""

from flask import Flask, request, render_template, jsonify
from EmotionDetection import emotion_detector

# Initialize Flask application
app = Flask(__name__)

@app.route('/emotionDetector', methods=['GET', 'POST'])
def emotion_detector_route():
    """
    Handle emotion detection requests via GET or POST methods.

    Returns:
        Response: JSON response containing
            - response: Formatted string with emotion scores or error message
            - emotions: Dictionary containing emotion scores and dominant emotion
    """
    if request.method == 'POST':
        data = request.get_json()
        text = data.get('text')
    else:
        text = request.args.get('textToAnalyze')

    emotion_results = emotion_detector(text)

    if emotion_results['dominant_emotion'] is None:
        response_text = "Invalid text! Please try again!"
    else:
        response_text = (
            f"For the given statement, the system response is 'anger': {emotion_results['anger']}, "
            f"'disgust': {emotion_results['disgust']}, 'fear': {emotion_results['fear']}, "
            f"'joy': {emotion_results['joy']} and 'sadness': {emotion_results['sadness']}. "
            f"The dominant emotion is {emotion_results['dominant_emotion']}."
        )

    return jsonify({
        "response": response_text,
        "emotions": emotion_results
    })

@app.route('/')
def index():
    """
    Render the main page of the application.

    Returns:
        Response: Rendered HTML template for the index page
    """
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='localhost', port=5000)
