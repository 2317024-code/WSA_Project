# MongoDB Import Guide

These files contain sample data in MongoDB Extended JSON format that can be directly imported into your MongoDB Atlas database.

## Files

- **songs-mongodb-format.json** - 10 sample songs (Extended JSON format)
- **users-mongodb-format.json** - 4 sample users (Extended JSON format)

## Method 1: MongoDB Atlas UI (Recommended - Easiest)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Click on your cluster → Collections
3. Select the `musicapp` database
4. Create a new collection called `songs` (if not exists)
5. Click on the collection → press Insert Document button
6. Click the JSON view button (switch from form view)
7. Delete the default `_id` document
8. Copy the entire content from `songs-mongodb-format.json`
9. Paste into the JSON editor
10. Click Insert
11. Repeat steps 4-10 for `users` collection using `users-mongodb-format.json`

## Method 2: MongoDB Compass (Desktop App)

1. Open MongoDB Compass
2. Connect to your cluster
3. Select `musicapp` database
4. Right-click → Create Collection → Name it `songs`
5. Click the collection
6. Click Import Data → Import File
7. Select `songs-mongodb-format.json`
8. Click Import
9. Repeat for `users` collection

## Method 3: mongoimport (CLI)

```powershell
# For songs
mongoimport --uri "mongodb+srv://2317024_db_user:PASSWORD@cluster0.nf8no3y.mongodb.net/musicapp" \
  --collection songs \
  --file ".\seeds\songs-mongodb-format.json" \
  --jsonArray

# For users
mongoimport --uri "mongodb+srv://2317024_db_user:PASSWORD@cluster0.nf8no3y.mongodb.net/musicapp" \
  --collection users \
  --file ".\seeds\users-mongodb-format.json" \
  --jsonArray
```

Replace `PASSWORD` with your Atlas user password.

## Method 4: Using seedDB.js Script

Once MongoDB connection is fixed:

```powershell
cd backend
npm run seed
```

## Verify Data Import

After importing, verify the data:

### In MongoDB Atlas UI:
- Click on collection → you should see the documents

### Using Postman:
```
GET http://localhost:3001/api/songs
```

Should return all 10 songs with proper ObjectId format.

## Data Format

Each document includes:
- `_id` - MongoDB ObjectId in Extended JSON format (`$oid`)
- `name` - Song/User name
- `artist_name` - Artist name (songs only)
- `releasedate` - Release year
- `duration` - Song duration
- `cover` - Image path
- `email` - User email
- `passwordHash` - Hashed password
- `createdAt` - ISO timestamp (`$date`)
- `updatedAt` - ISO timestamp (`$date`)

## Troubleshooting

**"bad auth" error**: Make sure your Atlas user password is correct and your IP is whitelisted in Network Access.

**Import fails**: Ensure the JSON is valid and the collection exists.

**No data shows**: Check that the database name in the URI matches where you're importing.
