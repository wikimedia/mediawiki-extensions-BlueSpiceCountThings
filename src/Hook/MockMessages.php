<?php

namespace BlueSpice\CountThings\Hook;

class MockMessages {

	public function __construct() {
	}

	/**
	 * TODO:Remove me
	 *
	 * @param string &$lckey
	 * @return void
	 */
	public static function mockMessages( &$lckey ) {
		if ( $lckey === 'bs-countthings-droplet-articles-name' ||
			$lckey === 'bs-countthings-droplet-articles-description' ) {
				$lckey = 'bs-countthings-ve-countarticles-title';
		}
		if ( $lckey === 'bs-countthings-droplet-files-name' ||
			$lckey === 'bs-countthings-droplet-files-description' ) {
				$lckey = 'bs-countthings-ve-countfiles-title';
		}
		if ( $lckey === 'bs-countthings-droplet-user-name' ||
			$lckey === 'bs-countthings-droplet-user-description' ) {
				$lckey = 'bs-countthings-ve-countusers-title';
		}
		if ( $lckey === 'bs-countthings-droplet-characters-name' ||
			$lckey === 'bs-countthings-droplet-characters-description' ) {
				$lckey = 'bs-countthings-ve-countcharacters-title';
		}
	}
}
