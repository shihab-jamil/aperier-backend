<?php

namespace Database\Seeders;

use App\Models\Journal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JournalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = ["Sustainability Studies", "Business Studies", "Bibliomatric and Systematic Reviews" , "Marketing Studies", "Finance Studies", "Tourism Studies"];
        foreach ($array as $item){
            Journal::create([
                "title" => $item
            ]);
        }
    }
}
