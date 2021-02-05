from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired


class DreamForm(FlaskForm):

    title = StringField('Title')
    keywords = StringField('Keywords')
    notes = TextAreaField('Notes')
    description = TextAreaField('Description')
    dreamer_id = IntegerField('Dreamer', validators=[DataRequired()])
