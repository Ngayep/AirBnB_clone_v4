#!/usr/bin/python3
""" Starts a Flask web application for 1-hbnb """
from flask import Flask, render_template
from models import storage
import uuid


app = Flask(__name__)


@app.route('/2-hbnb', strict_slashes=False)
def display_hbnb():
    """ Route to display 1-hbnb """
    cache_id = uuid.uuid4()
    states = storage.all('State')
    amenities = storage.all('Amenity')
    return render_template('2-hbnb.html', states=states, amenities=amenities,
                           cache_id=cache_id)


@app.teardown_appcontext
def teardown(exception):
    """ Close the storage session after each request """
    storage.close()


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)
