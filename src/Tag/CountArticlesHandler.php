<?php

namespace BlueSpice\CountThings\Tag;

use BlueSpice\Tag\Handler;
use CoreParserFunctions;
use NamespaceInfo;

class CountArticlesHandler extends Handler {

	/** @var NamespaceInfo */
	private $namespaceInfo = null;

	/**
	 *
	 * @param string $processedInput
	 * @param array $processedArgs
	 * @param \Parser $parser
	 * @param \PPFrame $frame
	 * @param NamespaceInfo $namespaceInfo
	 */
	public function __construct( $processedInput, array $processedArgs, \Parser $parser,
		\PPFrame $frame, NamespaceInfo $namespaceInfo ) {
		parent::__construct( $processedInput, $processedArgs, $parser, $frame );
		$this->namespaceInfo = $namespaceInfo;
	}

	/**
	 *
	 * @return string
	 */
	public function handle() {
		$count = 0;
		$namespaces = $this->namespaceInfo->getValidNamespaces();
		foreach ( $namespaces as $namespace ) {
			if ( $this->namespaceInfo->isContent( $namespace ) ) {
				$count += CoreParserFunctions::pagesinnamespace( $this->parser, $namespace );
			}
		}
		return " $count ";
	}
}
