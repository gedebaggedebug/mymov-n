<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'Anak Jalanan',
                'slug' => 'anak-jalanan',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=mYBCjh-3rw4',
                'thumbnail' => 'https://sindunesia.com/wp-content/uploads/2021/01/gambar-sketsa-minion-keren.jpg',
                'rating' => 8.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'Aco Anak Baik',
                'slug' => 'aco-anak-baik',
                'category' => 'Romantis',
                'video_url' => 'https://www.youtube.com/watch?v=D4k-puf08CE&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMD4k-puf08CE&start_radio=1',
                'thumbnail' => 'https://sindunesia.com/wp-content/uploads/2021/01/gambar-sketsa-minion-keren.jpg',
                'rating' => 9.3,
                'is_featured' => 0,  
            ],
            [
                'name' => 'Aco Raja Jalanan',
                'slug' => 'aco-raja-jalanan',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=1N1lwZjoZ48',
                'thumbnail' => 'https://sindunesia.com/wp-content/uploads/2021/01/gambar-sketsa-minion-keren.jpg',
                'rating' => 8.3,
                'is_featured' => 0,
            ]
            ];
        Movie::insert($movies);
    }
}
