// Create loading logic
var load, map, k;
while(load = target.nextLoad()) {
/*~
IF Object_ID('$load.qualified', 'P') IS NOT NULL
DROP PROCEDURE [$load.qualified];
GO
--------------------------------------------------------------------------
-- Procedure: $load.qualified
-- Source:    $load.source
-- Target:    $load.target
--
~*/
    while(map = load.nextMap()) {
/*~
-- Map: $map.source to $map.target $(map.as)? (as $map.as)
~*/
    }
/*~
--
-- Generated: ${new Date()}$ by $VARIABLES.USERNAME
-- From: $VARIABLES.COMPUTERNAME in $VARIABLES.USERDOMAIN
--------------------------------------------------------------------------
CREATE PROCEDURE [$load.qualified] 
AS
BEGIN

SET NOCOUNT ON;
~*/
    beginMetadata(load.qualified);
/*~    
    MERGE INTO [$target.database]..[$load.target] AS t
    USING~*/
    if(load._load) {
/*~ (
        $load._load
    ) AS s
~*/
    }
    else {
/*~
        $load.source AS s
~*/
    }
/*~
    ON (
~*/
    var keys = [], nonkeys = [], nonkeysAndMetadata = [];
    while(map = load.nextMap()) {
        if(map.as == 'natural key') {
            keys.push(map);
        }
        else {
            nonkeysAndMetadata.push(map);
            if(!(map.as == 'metadata'))
                nonkeys.push(map);
        }
    }
    for(k = 0; map = keys[k]; k++) {
/*~
        s.[$map.source] = t.[$map.target]
    $(k < keys.length - 1)? AND
~*/
    }
/*~    
    )
    WHEN NOT MATCHED THEN INSERT (
~*/
    while(map = load.nextMap()) {
/*~
        [$map.target]$(load.hasMoreMaps())?,
~*/
    }    
/*~    
    )
    VALUES (
/*~
    while(map = load.nextMap()) {
/*~
        s.[$map.source]$(load.hasMoreMaps())?,
~*/
    }    
/*~
    )$(nonkeys.length == 0)?;
~*/
    if(nonkeys.length > 0) {
/*~
    WHEN MATCHED AND (
~*/
        for(k = 0; map = nonkeys[k]; k++) {
/*~
        (t.[$map.target] is null OR s.[$map.source] <> t.[$map.target])
    $(k < nonkeys.length - 1)? OR    
~*/
        }    
/*~
    ) 
    THEN UPDATE
    SET
~*/
        for(k = 0; map = nonkeysAndMetadata[k]; k++) {
/*~
        t.[$map.target] = s.[$map.source]$(k < nonkeysAndMetadata.length - 1)? , : ;
~*/
        }    
    } // end of if nonkeys
    endMetadata();
/*~
END
GO
~*/
}