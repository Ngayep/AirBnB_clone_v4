#!/usr/bin/python3
""" Starts a Flask web application for 1-hbnb """
from flask import Flask, render_template
from models import storage
import uuid


app = Flask(__name__)


@app.route('/3-hbnb')
def three_hbnb():
    """Render 3-hbnb page"""
    return render_template('3-hbnb.html')


@app.teardown_appcontext
def teardown(exception):
    """ Close the storage session after each request """
    storage.close()


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)
