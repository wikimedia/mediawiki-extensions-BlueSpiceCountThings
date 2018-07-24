ve.ce.CountUsersNode = function VeCeCountUsersNode() {
	// Parent constructor
	ve.ce.CountUsersNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.CountUsersNode, ve.ce.MWInlineExtensionNode );
/* Static properties */

ve.ce.CountUsersNode.static.name = 'countusers';

ve.ce.CountUsersNode.static.primaryCommandName = 'bs:countusers';

// If body is empty, tag does not render anything
ve.ce.CountUsersNode.static.rendersEmpty = true;
/**
 * @inheritdoc ve.ce.GeneratedContentNode
 */
ve.ce.CountUsersNode.prototype.validateGeneratedContents = function ( $element ) {
	if ( $element.is( 'span' ) && $element.children( '.bsErrorFieldset' ).length > 0 ) {
		return false;
	}
	return true;
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CountUsersNode );
