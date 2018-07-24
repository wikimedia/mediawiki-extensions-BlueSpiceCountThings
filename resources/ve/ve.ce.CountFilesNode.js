ve.ce.CountFilesNode = function VeCeCountFilesNode() {
	// Parent constructor
	ve.ce.CountFilesNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.CountFilesNode, ve.ce.MWInlineExtensionNode );
/* Static properties */

ve.ce.CountFilesNode.static.name = 'countfiles';

ve.ce.CountFilesNode.static.primaryCommandName = 'bs:countfiles';

// If body is empty, tag does not render anything
ve.ce.CountFilesNode.static.rendersEmpty = true;
/**
 * @inheritdoc ve.ce.GeneratedContentNode
 */
ve.ce.CountFilesNode.prototype.validateGeneratedContents = function ( $element ) {
	if ( $element.is( 'span' ) && $element.children( '.bsErrorFieldset' ).length > 0 ) {
		return false;
	}
	return true;
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CountFilesNode );
