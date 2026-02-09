# Sample Database Content

This folder contains sample data for seeding the music player database.

## Files

- **sampleData.json** - Contains 10 sample songs and 4 sample users
- **seedDB.js** - Script to insert sample data into MongoDB

## Sample Songs (10 total)

```json
{
  "name": "Believer",
  "artist_name": "Imagine Dragons",
  "releasedate": "2017",
  "duration": "3:24",
  "cover": "/assets/logo.png"
}
```

Songs included:
1. Believer - Imagine Dragons (2017)
2. Faded - Alan Walker (2015)
3. Shape of You - Ed Sheeran (2017)
4. Blinding Lights - The Weeknd (2019)
5. Bad Guy - Billie Eilish (2018)
6. Levitating - Dua Lipa (2020)
7. Sunroof - Nicky Youre (2022)
8. Anti-Hero - Taylor Swift (2022)
9. Rolling in the Deep - Adele (2010)
10. Someone You Loved - Lewis Capaldi (2018)

## Sample Users (4 total)

```json
{
  "name": "Demo User",
  "email": "demo@example.com",
  "passwordHash": "$2b$10$demoHashedPassword123"
}
```

Users included:
1. Demo User (demo@example.com)
2. John Doe (john@example.com)
3. Jane Smith (jane@example.com)
4. Music Lover (musiclover@example.com)

## How to Seed the Database

Once MongoDB authentication is fixed, run:

```bash
cd backend
npm run seed
```

Or manually:

```bash
node seeds/seedDB.js
```

This will:
1. Connect to MongoDB using MONGODB_URI from .env
2. Clear existing songs and users
3. Insert sample data
4. Disconnect and exit

## Using with Postman

After seeding, test endpoints:

```
GET http://localhost:3001/api/songs
```

Should return the 10 sample songs.

```
GET http://localhost:3001/api/users
```

Should return the 4 sample users.

## Modify Sample Data

Edit `sampleData.json` to add/remove songs or users, then re-run the seed script.
