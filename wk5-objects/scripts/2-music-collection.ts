console.log("***** Music Collection *****");

let collection = [];
console.log(collection);

function addToCollection(title, artist, yearPublished) {
    let album = {
        Title: title,
        Artist: artist,
        Year: yearPublished,
    }
    collection.push(album);
    return true;
}

addToCollection('Too Fast for Love', 'Motley Crue', 1981);
console.table(collection); // Testing Collection

// Added Albums
addToCollection("Shout at the Devil", "Motley Crue", 1983);
addToCollection("Dr. Feelgood", "Motley Crue", 1985);
addToCollection("Girls, Girls, Girls", "Motley Crue", 1987);
addToCollection("1984", "Van Halen", 1984);
addToCollection("Night Songs", "Cinderella", 1986);
addToCollection("Hysteria", "Def Leppard", 1987);

console.table(collection);

function showCollection(albums) {
    console.log("Albums in Collection:", albums.length);
    albums.forEach((album) =>
      console.log(
        `"${album.Title}" by '${album.Artist}', published in ${album.Year}`
      )
    );
  }
  showCollection(collection);

  function findByArtist(band) {
    let artistArray = []; // search array
    for (let album of collection) {
      for (let a in album) {
        //
        if (band === album[a]) {
          //
          artistArray.push(album); //
        }
        continue;
      }
    }
    showCollection(artistArray); // end findByArtist
  }
  findByArtist("Motley Crue"); // should return 4
  console.log(""); // just for spacing
  findByArtist("Van Halen"); // should return 1
  console.log(""); // just for spacing
  findByArtist("Garth Brooks"); // should return 0