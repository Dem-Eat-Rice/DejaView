from flask import Blueprint, jsonify, session, request
from app.models import User, Dream, Fragment, db
from app.forms import LoginForm
from app.forms import SignUpForm
from app.forms import FragmentForm
from flask_login import login_required

fragments_routes = Blueprint("fragments", __name__)


@fragments_routes.route("/<int:id>")
# @login_required
def fragments():
    fragment = Fragment.query.get(id)


@fragments_routes.route("/", methods=["POST"])
def post_fragment():
    form = FragmentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_fragment = Fragment()
        new_fragment.user_id = request.json["user_id"]
        form.populate_obj(new_fragment)
        db.session.add(new_fragment)
        db.session.commit()
        return new_fragment.to_dict()
    return "Bad Data"


@fragments_routes.route("/<int:id>", methods=["PUT"])
# @login_required
def edit_fragments(id):
    dream = Dream.query.get(id)
    dream["csrf_token"].data = request.cookies["csrf_token"]

    if "title" in request.json:
        dream.title = request.json["title"]
    if "emotions" in request.json:
        dream.emotions = request.json["emotions"]
    if "setting" in request.json:
        dream.setting = request.json["setting"]
    if "description" in request.json:
        dream.description = request.json["description"]
    db.session.commit()

    return {"message": "success"}
