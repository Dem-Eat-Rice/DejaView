from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired


class FragmentForm(FlaskForm):

    title = StringField('Title')
    emotions = StringField('Emotions')
    setting = StringField('Setting')
    description = TextAreaField('Description')
    user_id = IntegerField('User', validators=[DataRequired()])
