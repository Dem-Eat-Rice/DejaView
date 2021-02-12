from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, User, Dream, Fragment, Dreams_Fragment

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/dreams/<int:dreamId>')
# @login_required
def dream_with_fragment(id, dreamId):
    # dream = Dream.query.get(dreamId)
    dream_with_fragment = db.session.query(Dream, Fragment).filter(User.id == id).first()
    return jsonify([dream.to_dict() for dream in dream_with_fragment])
