<?php

namespace BlueSpice\CountThings\Renderer;

use BlueSpice\Renderer\Params;
use BlueSpice\TemplateRenderer;
use BlueSpice\Utility\CacheHelper;
use MediaWiki\Config\Config;
use MediaWiki\Context\IContextSource;
use MediaWiki\Linker\LinkRenderer;

class CountCharacters extends TemplateRenderer {

	public const TITLE = 'title';
	public const TITLELINK = 'titlelink';

	/**
	 * Constructor
	 * @param Config $config
	 * @param Params $params
	 * @param LinkRenderer|null $linkRenderer
	 * @param IContextSourcee|null $context
	 * @param string $name | ''
	 * @param CacheHelper|null $cacheHelper
	 */
	protected function __construct(
		Config $config, Params $params,	?LinkRenderer $linkRenderer = null,
		?IContextSource $context = null, $name = '', ?CacheHelper $cacheHelper = null
	) {
		parent::__construct(
			$config,
			$params,
			$linkRenderer,
			$context,
			$name,
			$cacheHelper
		);

		$this->args[static::TITLE] = $params->get( static::TITLE, '' );
		$this->args[static::TITLELINK] = $params->get( static::TITLELINK, '' );
	}

	/**
	 *
	 * @return string
	 */
	public function getTemplateName() {
		return 'BlueSpiceCountThings.CountCharacters';
	}

}
