ve.dm.CountUsersNode = function VeDmCountUsersNode() {
	// Parent constructor
	ve.dm.CountUsersNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.CountUsersNode, ve.dm.MWInlineExtensionNode );

/* Static members */

ve.dm.CountUsersNode.static.name = 'countusers';

ve.dm.CountUsersNode.static.tagName = 'bs:countusers';

// Name of the parser tag
ve.dm.CountUsersNode.static.extensionName = 'bs:countusers';


// This tag renders without content
ve.dm.CountUsersNode.static.childNodeTypes = [];
ve.dm.CountUsersNode.static.isContent = true;


/* Registration */
ve.dm.modelRegistry.register( ve.dm.CountUsersNode );
