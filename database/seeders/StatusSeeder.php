<?php

namespace Database\Seeders;

use App\Models\Stutus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = ["With Editor", "In Review", "Revision Required" , "Accepted"];
        foreach ($array as $item){
            Stutus::create([
                "name" => $item
            ]);
        }
    }
}