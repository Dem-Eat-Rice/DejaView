from flask.cli import AppGroup
from .users import seed_users, undo_users
from .dreams import seed_dreams, undo_dreams
from .fragments import seed_fragments, undo_fragments

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_dreams()
    seed_fragments()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_dreams()
    undo_fragments()
    # Add other undo functions here
