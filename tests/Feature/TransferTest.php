<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TransferTest extends TestCase
{
    public function testPostTransfer()
    {
        $response = $this->json('POST','/api/transfer',[
            'description' => 'Prueba dos',
            'amount' => 100, 
            'wallet_id' =>   4,
        ]);

        $response->assertJsonStructure([
            'id','description','amount','wallet_id'
        ])->assertStatus(201);

        $this->assertDatabaseHas('transfers',[
            'description' => 'Prueba dos',
            'amount' => 100, 
            'wallet_id' =>   4,
        ]);
        // $this->assertDatabaseHas('wallets',[
        //     'id' => 4,
        //     'money' => 100
        // ]);
    }
}
