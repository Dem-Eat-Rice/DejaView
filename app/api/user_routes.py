from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, User, Dream, Fragment, Dreams_Fragment

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/dreams')
# @login_required
def current_users_dreams(id):
    desc = db.desc()
    user_dreams = Dream.query.filter(Dream.dreamer_id == id).order_by(desc(Dream.created_at)).all()
    return jsonify([dream.to_dict() for dream in user_dreams])


@user_routes.route('/<int:id>/dreams/<int:dreamId>')
# @login_required
def dream_with_fragment(id, dreamId):
    dream = Dream.query.filter(Dream.dreamer_id == id).first()

    # dream_with_fragment = db.session.query(User, Dream, Fragment, Dreams_Fragment).filter(User.id == id).join(
    #     Dreams_Fragment, Dreams_Fragment.dream_id == dreamId).join(Fragment, Dreams_Fragment.fragment_id == Fragment.id).all()
    fragments = Fragment.query.join(Dreams_Fragment).filter(
        Dreams_Fragment.dream_id == dreamId).all()
    frag = [fragment.to_dict() for fragment in fragments]

    whole_dream = [dream.to_dict(), frag]
    return jsonify(whole_dream)



