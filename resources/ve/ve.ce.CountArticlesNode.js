ve.ce.CountArticlesNode = function VeCeCountArticlesNode() {
	// Parent constructor
	ve.ce.CountArticlesNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.CountArticlesNode, ve.ce.MWInlineExtensionNode );
/* Static properties */

ve.ce.CountArticlesNode.static.name = 'countarticles';

ve.ce.CountArticlesNode.static.primaryCommandName = 'bs:countarticles';

// If body is empty, tag does not render anything
ve.ce.CountArticlesNode.static.rendersEmpty = true;
/**
 * @inheritdoc ve.ce.GeneratedContentNode
 */
ve.ce.CountArticlesNode.prototype.validateGeneratedContents = function ( $element ) {
	if ( $element.is( 'span' ) && $element.children( '.bsErrorFieldset' ).length > 0 ) {
		return false;
	}
	return true;
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CountArticlesNode );
