<?php

namespace Database\Seeders;

use App\Models\StudyType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = ["Original Article", "Review", "Communication" , "Editorial", "Perspective"];
        foreach ($array as $item){
            StudyType::create([
                "name" => $item
            ]);
        }
    }
}
