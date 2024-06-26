<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([RoleandPermissionSeeder::class]);
        $this->call([PlaceSeeder::class]);
        $this->call([StateSeeder::class]);
        $this->call([CitySeeder::class]);
    }
}
