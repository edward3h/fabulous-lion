import db from './db';

const findOrCreate = (profile, done) => {
  db.get("select id, provider, name, email, avatar from users where id = $id and provider = $provider", {$id: profile.id, $provider: profile.provider}, 
         (err, row) => {
    if (err) {
      done(err);
    } else if (row) {
      done(null, row);
    } else {
      // not found, create
      db.run("insert into users(id, provider, name, email, avatar) values ($id, $provider, $name, $email, $avatar)",
             {$id: profile.id, $provider: profile.provider, $name: profile.displayName, $email: profile.email, $avatar: profile.profile_pic},
             (err) => {
        if (err) {
          done(err);
        } else {
          done(null, {id: profile.id, provider: profile.provider, name: profile.displayName, email: profile.email, avatar: profile.profile_pic});
        }
      });
    }
  });
};

export default {
  findOrCreate
};