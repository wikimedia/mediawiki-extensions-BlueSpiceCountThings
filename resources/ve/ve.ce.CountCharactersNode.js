ve.ce.CountCharactersNode = function VeCeCountCharactersNode() {
	// Parent constructor
	ve.ce.CountCharactersNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.CountCharactersNode, ve.ce.MWInlineExtensionNode );
/* Static properties */

ve.ce.CountCharactersNode.static.name = 'countcharacters';

ve.ce.CountCharactersNode.static.primaryCommandName = 'bs:countcharacters';

// If body is empty, tag does not render anything
ve.ce.CountCharactersNode.static.rendersEmpty = true;
/**
 * @inheritdoc ve.ce.GeneratedContentNode
 */
ve.ce.CountCharactersNode.prototype.validateGeneratedContents = function ( $element ) {
	if ( $element.is( 'div' ) && $element.children( '.bsErrorFieldset' ).length > 0 ) {
		return false;
	}
	return true;
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CountCharactersNode );
