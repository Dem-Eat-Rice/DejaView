from app.models import db, Dream

# Adds a demo user, you can add other users here if you want


def seed_dreams():

    demo = Dream(title='DemoDream', keywords='Demonstration NotReal',
                 notes='Practice CodingWindow Deadlines', dreamer_id=1)

    demo2 = Dream(title='JimmyDream', keywords='Dream Seed',
                  notes='Wild ride', dreamer_id=2)

    demo3 = Dream(title='Spongebob Dream', keywords='Krusty Krab',
                  notes='Pizza', dreamer_id=1)

    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_dreams():
    db.session.execute('TRUNCATE dreams CASCADE;')
    db.session.commit()
