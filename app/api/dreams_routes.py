from flask import Blueprint, jsonify, session, request
from app.models import User, Dream, Fragment, Dreams_Fragment, db
from app.forms import DreamForm, FragmentForm, LoginForm, SignUpForm
from flask_login import login_required

dreams_routes = Blueprint("dreams", __name__)


@dreams_routes.route("/")
def dreams():
    dreams = Dream.query.all()
    return jsonify([dream.to_dict() for dream in dreams])


@dreams_routes.route("/", methods=["POST"])
def post_a_dream():
    form = DreamForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_dream = Dream()
        new_dream.dreamer_id = request.json["dreamer_id"]
        form.populate_obj(new_dream)
        db.session.add(new_dream)
        db.session.commit()
        return new_dream.to_dict()
    return "Bad Data"


@dreams_routes.route("/<int:id>")
# @login_required
def get_single_dream(id):
    dream = Dream.query.get(id)
    return dream.to_dict()


@dreams_routes.route("/<int:id>", methods=["PUT"])
# @login_required
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


@dreams_routes.route("/<int:id>", methods=["DELETE"])
# @login_required
def delete_dreams(id):
    dream = Dream.query.get(id)

    db.session.delete(dream)
    db.session.commit()
    return {"message": "Dream Deleted"}


@dreams_routes.route("/<int:id>/fragments")
# @login_required
def dream(id):
    fragments = Fragment.query.join(Dreams_Fragment).filter(
        Dreams_Fragment.dream_id == id).all()
    frag = [fragment.to_dict() for fragment in fragments]
    return jsonify(frag)


# ===================DREAMS_FRAGMENTS=================== #

@dreams_routes.route("/fragments/all", methods=["POST"])
def dreams_fragment():
    new_dreams_fragment = Dreams_Fragment(dream_id=id, fragment_id=request.json['fragment_id'])
    db.session.add(new_dreams_fragment)
    db.session.commit()
    return new_dreams_fragment.to_dict()
