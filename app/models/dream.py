from .db import db


class Dream(db.Model):
    __tablename__ = 'dreams'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    keywords = db.Column(db.String(50))
    notes = db.Column(db.Text)
    dreamer_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())

    dreamer = db.relationship('User', back_ref='dreams')

    fragments = db.relationship(
        'Fragment', secondary='dreams_fragments', back_ref='dreams')

    def to_dict(self):
        return {
            'id' = self.id
            'title' = self.title
            'keywords' = self.keywords
            'notes' = self.notes
            'dreamer_id' = self.dreamer_id
        }
