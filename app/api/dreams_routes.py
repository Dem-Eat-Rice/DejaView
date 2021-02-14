from flask import Blueprint, jsonify, session, request
from app.models import User, Dream, Fragment, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import login_required

dreams_routes = Blueprint("dreams", __name__)


@dreams_routes.route("/")
def dreams():
    dreams = Dream.query.all()
    return jsonify([dream.to_dict() for dream in dreams])


@dreams_routes.route("/", methods=["POST"])
def post_a_dream():
    form = DreamForm()  # need to create a form
    if form.validate_on_submit():
        new_dream = Dream()
        new_dream.user_id = request.json["user_id"]
        form.populate_obj(new_dream)
        db.session.add(new_dream)
        db.session.commit()
        return new_dream.to_dict()
    return "Bad Data"


@dreams_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_dreams(id):
    dream = Dream.query.get(id)

    if "title" in request.json:
        dream.title = request.json["title"]
    if "keywords" in request.json:
        dream.keywords = request.json["keywords"]
    if "notes" in request.json:
        dream.notes = request.json["notes"]
    db.session.commit()

    return {"message": "success"}


@dreams_routes.route("/<int:id>")
def dream(id):
    dream = Dream.query.get(id)
    return jsonify(dream.to_dict())
