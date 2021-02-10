from flask import Blueprint, jsonify, session, request
from app.models import User, Dream, Fragment, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import login_required

dreams_routes = Blueprint('dreams', __name__)


@dreams_routes.route('/')
def dreams():
    dreams = Dream.query.all()
    return jsonify([dream.to_dict() for dream in dreams])


@dreams_routes.route('/<int:id>')
def dream(id):
    dream = Dream.query.get(id)
    return jsonify(dream.to_dict())
