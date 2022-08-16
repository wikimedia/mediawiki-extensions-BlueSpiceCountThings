<?php

namespace BlueSpice\CountThings\ContentDroplets;

use MediaWiki\Extension\ContentDroplets\Droplet\TagDroplet;
use Message;
use RawMessage;

class CountCharactersDroplet extends TagDroplet {

	/**
	 * @inheritDoc
	 */
	public function getName(): Message {
		return new RawMessage( 'Count characters' );
	}

	/**
	 * @inheritDoc
	 */
	public function getDescription(): Message {
		return new RawMessage( "Count characters description" );
	}

	/**
	 * @inheritDoc
	 */
	public function getIcon(): string {
		return 'mathematics';
	}

	/**
	 * @inheritDoc
	 */
	public function getRLModule(): string {
		return 'ext.bluespice.countthings.visualEditorTagDefinition';
	}

	/**
	 * @return array
	 */
	public function getCategories(): array {
		return [ 'content', 'data' ];
	}

	/**
	 *
	 * @return string
	 */
	protected function getTagName(): string {
		return 'bs:countcharacters';
	}

	/**
	 * @return array
	 */
	protected function getAttributes(): array {
		return [
			'mode' => [
				[
					[ 'data' ] => 'all',
					[ 'label' ] => Message::newFromKey( 'bs-countthings-ve-countcharacters-mode-all' )
				],
				[
					[ 'data' ] => 'chars',
					[ 'label' ] => Message::newFromKey( 'bs-countthings-ve-countcharacters-mode-charsonly' )
				],
				[
					[ 'data' ] => 'words',
					[ 'label' ] => Message::newFromKey( 'bs-countthings-ve-countcharacters-mode-wordsonly' )
				],
				[
					[ 'data' ] => 'chars words',
					[ 'label' ] => Message::newFromKey( 'bs-countthings-ve-countcharacters-mode-wordsandchars' )
				],
				[
					[ 'data' ] => 'pages',
					[ 'label' ] => Message::newFromKey( 'bs-countthings-ve-countcharacters-mode-pagesonly' )
				]
			]
		];
	}

	/**
	 * @return bool
	 */
	protected function hasContent(): bool {
		return false;
	}

	/**
	 * @return string|null
	 */
	public function getVeCommand(): ?string {
		return 'countCharactersCommand';
	}

}
