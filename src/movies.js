// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let justDirectors = moviesArray.map((director) => {
        return director.director
    })
    return justDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let justSteven = moviesArray.filter((steven) => {
        return steven.genre.includes("Drama") && steven.director === "Steven Spielberg"
    })
    return justSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    let scoreAvg = moviesArray.reduce((acc, score) => {
      if (score.score !== undefined){
        return acc + score.score
      } else {
        return acc
      }
    }, 0)

    let avg = scoreAvg / moviesArray.length
    let twoDeci = avg.toFixed(2)
    return Number (twoDeci)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   let scoreDrama = moviesArray.reduce((acc, dramaSC) => {
    if (dramaSC.score !== undefined && dramaSC.genre.includes("Drama")){
        return acc + dramaSC.score
    } else {
        return acc
    }
   }, 0)

   let avg = scoreDrama / moviesArray.length
   let twoDeci = avg.toFixed(2);
   return Number(twoDeci)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let clone = structuredClone(moviesArray)

    clone.sort ((a, b) => {
        if (a.year > b.year){
            return 1
        } else if(a.year < b.year){
            return -1
        } else if (a.year === b.year){
            if (a.title > b.title){
                return 1
            } else if(a.title < b.title){
                return -1
            }
        }
        return 0
    })
    return clone
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let clone = structuredClone(moviesArray);
    clone.sort((a, b) => {
      if (a.title > b.title){
        return 1
      } else if (a.title < b.title){
        return -1
      } else {
        return 0
      } 
    })
    let top20 = clone.slice(0, 20)
    let byTitle = top20.map((title) => {
       return title.title
    })
    return byTitle
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let timeDuration = moviesArray.map((duration) => {
      
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  
      
    
}


