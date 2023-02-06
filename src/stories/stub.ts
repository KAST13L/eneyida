export type MovieType =  {
    title: string,
    posterPath: string,
        releaseDate: string,
        genres: {
        id: number,
            name: string
    }[],
        runtime: number
}

export const movies: MovieType[] = [
    {
        title: 'Sonic. The legend of white space',
        releaseDate: 'Apr 08, 2022',
        posterPath: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
        genres: [{
            id: 2,
            name: 'drama'
        }],
        runtime: 121
    },
    {
        title: 'Last of us',
        releaseDate: 'May 02, 2011',
        posterPath: "https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        genres: [{
            id: 2,
            name: 'jah'
        }],
        runtime: 1201
    },
    {
        title: 'Hero without you',
        releaseDate: 'Jun 31, 1901',
        posterPath: "https://www.themoviedb.org/t/p/w220_and_h330_face/onp2UrYrvkHphkrCq8wKFflmlKl.jpg",
        genres: [{
            id: 2,
            name: 'erotika'
        }],
        runtime: 33
    }
]