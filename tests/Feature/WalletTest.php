<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class WalletTest extends TestCase
{ 
    public function testGetWallet()
    {
        $response = $this->json('GET', '/api/wallet');
        $response->assertStatus(200)
            ->assertJsonStructure([
                'id', 'money', 'transfers' => [
                    '*' => [
                        'id', 'description', 'amount', 'wallet_id'
                    ]
                ]
            ]);
        $this->assertCount(11, $response->json()['transfers']);
    }
}
