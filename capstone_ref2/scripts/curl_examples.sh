#!/usr/bin/env bash
# Corrected command reference from Coursera feedback. Run against your own app.
BASE="http://127.0.0.1:8000"
# Task 5: valid credentials
curl -X POST "$BASE/djangoapp/login" -H "Content-Type: application/json" -d '{"userName":"YOUR_VALID_USERNAME","password":"YOUR_VALID_PASSWORD"}'
# Task 6: logout uses GET
curl -X GET "$BASE/djangoapp/logout"
# Task 8: reviews for dealer 1
curl -X GET "$BASE/fetchReviews/dealer/1"
# Task 9: all dealers
curl -X GET "$BASE/fetchDealers"
# Task 10: dealer details
curl -X GET "$BASE/fetchDealer/1"
# Task 11: Kansas dealers
curl -X GET "$BASE/fetchDealers/Kansas"
# Tasks 14-15: car makes/models
curl -X GET "$BASE/djangoapp/get_cars"
# Task 16: sentiment analysis
curl -X GET "$BASE/analyze/Fantastic%20services"
