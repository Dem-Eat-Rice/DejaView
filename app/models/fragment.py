from .db import db


class Fragment(db.Model):
    __tablename__ = 'fragments'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    emotions = db.Column(db.String(100))
    setting = db.Column(db.String(255))
    description = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user = db.relationship('User', back_populates='fragments')
    dreams = db.relationship(
        'Dream', secondary='dreams_fragments', back_populates='fragments')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'emotions': self.emotions,
            'setting': self.setting,
            'description': self.description,
            'user_id': self.user_id
        }
