interface Movie {
  title: string;
  year: number;
  rating: number;
  awards: string[];
}
interface Category {
  name: string;
  movies: Movie[];
}

// Base class for filters
class Filter {
  constructor(
    public filterType: string,
    public filter?: string | number,
    public filterTo?: string | number,
    public values?: string[]
  ) {}
}

// Class for filtering by search
class SearchFilter extends Filter {
  constructor(public filter: string) {
    super('search');
  }
}

// Class for filtering by a range of values
class RangeFilter extends Filter {
  constructor(
    public filter: string,
    public filterTo: number
  ) {
    super('range', undefined, filterTo);
  }
}

// Class to filter by selected values
class ValuesFilter extends Filter {
  constructor(public values: string[]) {
    super('values', undefined, undefined, values);
  }
}

// Class for a list of movies
class MovieList {
  movies: Movie[];
  filters: Filter[];

  constructor(movies: Movie[], filters: Filter[]) {
    this.movies = movies;
    this.filters = filters;
  }

  // The method applies a search filter to the list of movies
  applySearchValue(searchFilter: SearchFilter) {
    this.movies = this.movies.filter(movie => movie.title.toLowerCase().includes(searchFilter.filter.toLowerCase()));
  }

  // The method applies a range filter to the list of movies
  applyRangeValue(rangeFilter: RangeFilter) {
    this.movies = this.movies.filter(movie => {
      switch (rangeFilter.filter) {
        case 'year':
          return movie.year >= rangeFilter.filterTo;
        case 'rating':
          return movie.rating >= rangeFilter.filterTo;
        default:
          return true;
      }
    });
  }

  applyValuesFilter(valuesFilter: ValuesFilter) {
    // Code for filtering
  }
}

// Classfor a list of categories
class CategoryList {
  categories: Category[];
  filters: Filter[];

  constructor(categories: Category[], filters: Filter[]) {
    this.categories = categories;
    this.filters = filters;
  }

  // The method applies a search filter to a list of categories
  applySearchValue(searchFilter: SearchFilter) {
    this.categories.forEach(category => {
      category.movies = category.movies.filter(movie =>
        movie.title.toLowerCase().includes(searchFilter.filter.toLowerCase())
      );
    });
  }

  // The method applies a value range filter to the list of categories
  applyRangeValue(rangeFilter: RangeFilter) {
    this.categories.forEach(category => {
      category.movies = category.movies.filter(movie => {
        switch (rangeFilter.filter) {
          case 'year':
            return movie.year >= rangeFilter.filterTo;
          case 'rating':
            return movie.rating >= rangeFilter.filterTo;
          default:
            return true;
        }
      });
    });
  }

  applyValuesFilter(valuesFilter: ValuesFilter) {
    // Code for filtering
  }
}
