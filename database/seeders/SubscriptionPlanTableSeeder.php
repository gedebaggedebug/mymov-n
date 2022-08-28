<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $SubscriptionPlan = [
            [
                'name' => 'basic',
                'price' => 199000,
                'active_period_in_months' => 3,
                'features' => json_encode(['feature1', 'feature2'])
            ],
            [
                'name' => 'premium',
                'price' => 499000,
                'active_period_in_months' => 12,
                'features' => json_encode(['feature1', 'feature2', 'feature3', 'feature4'])
            ]
        ];
        SubscriptionPlan::insert($SubscriptionPlan);
    }
}
