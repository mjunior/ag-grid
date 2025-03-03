[[only-angular]]
|## Custom Floating Filter Interface
|
|The interface for a custom filter component is as follows:
|
|```ts
|interface IFloatingFilterAngularComp<ParentFilter = any> {
|    // Mandatory methods
|
|    // The agInit(params) method is called on the floating filter once.
|    // See below for details on the parameters.
|    agInit(params: IFloatingFilterParams<ParentFilter>): void;
|
|    // Gets called every time the parent filter changes. Your floating
|    // filter would typically refresh its UI to reflect the new filter
|    // state. The provided parentModel is what the parent filter returns
|    // from its getModel() method. The event is the FilterChangedEvent
|    // that the grid fires.
|    onParentModelChanged(parentModel: any, event: FilterChangedEvent): void;
|
|    // Gets called every time the popup is shown, after the GUI returned in
|    // getGui is attached to the DOM. If the filter popup is closed and re-opened, this method is
|    // called each time the filter is shown. This is useful for any logic that requires attachment
|    // before executing, such as putting focus on a particular DOM element. 
|    afterGuiAttached?(params?: IAfterGuiAttachedParams): void;
|}
|```
|
|### Custom Filter Parameters
|
|The `agInit(params)` method takes a params object with the items listed below. If the user provides params via the `colDef.floatingFilterComponentParams` attribute, these
|will be additionally added to the params object, overriding items of the same name if a name clash exists.
|
