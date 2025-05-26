<?php

namespace BlueSpice\CountThings\Tag;

use MediaWiki\MediaWikiServices;
use MediaWiki\Message\Message;
use MWStake\MediaWiki\Component\GenericTagHandler\ClientTagSpecification;
use MWStake\MediaWiki\Component\GenericTagHandler\GenericTag;
use MWStake\MediaWiki\Component\GenericTagHandler\ITagHandler;
use MWStake\MediaWiki\Component\InputProcessor\Processor\BooleanValue;

class CountFiles extends GenericTag {

	/**
	 * @inheritDoc
	 */
	public function getTagNames(): array {
		return [ 'bs:countfiles', 'countfiles' ];
	}

	/**
	 * @inheritDoc
	 */
	public function getContainerElementName(): ?string {
		return 'span';
	}

	/**
	 * @inheritDoc
	 */
	public function hasContent(): bool {
		return false;
	}

	/**
	 * @inheritDoc
	 */
	public function getHandler( MediaWikiServices $services ): ITagHandler {
		return new CountFilesHandler( $services->getDBLoadBalancer() );
	}

	/**
	 * @inheritDoc
	 */
	public function getParamDefinition(): ?array {
		$noDuplicated = ( new BooleanValue() )->setDefaultValue( true );

		return [ 'noduplicates' => $noDuplicated ];
	}

	/**
	 * @inheritDoc
	 */
	public function getClientTagSpecification(): ClientTagSpecification|null {
		return new ClientTagSpecification(
			'CountFiles',
			Message::newFromKey( 'bs-countthings-tag-countfiles-desc' ),
			null,
			Message::newFromKey( 'bs-countthings-ve-countfiles-title' )
		);
	}
}
