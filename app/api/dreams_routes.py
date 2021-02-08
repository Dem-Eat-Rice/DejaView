from flask import Blueprint, jsonify, session, request
from app.models import User, Dream, Fragment, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

dreams_routes = Blueprint('dreams', __name__)

@dreams_routes('/')
def dreams():
    dreams = Dream.query.all()
    return jsonify([dream.to_dict() for dream in dreams])

