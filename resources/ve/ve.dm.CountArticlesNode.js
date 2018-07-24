ve.dm.CountArticlesNode = function VeDmCountArticlesNode() {
	// Parent constructor
	ve.dm.CountArticlesNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.CountArticlesNode, ve.dm.MWInlineExtensionNode );

/* Static members */

ve.dm.CountArticlesNode.static.name = 'countarticles';

ve.dm.CountArticlesNode.static.tagName = 'bs:countarticles';

// Name of the parser tag
ve.dm.CountArticlesNode.static.extensionName = 'bs:countarticles';


// This tag renders without content
ve.dm.CountArticlesNode.static.childNodeTypes = [];
ve.dm.CountArticlesNode.static.isContent = true;


/* Registration */
ve.dm.modelRegistry.register( ve.dm.CountArticlesNode );
