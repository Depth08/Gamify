/**
 * Created by Rafael on 4/04/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'features',
    template: `
<section class="container">
    <div class="row">
        <div class="feature column column-33">    
            <img src="img/devices.svg" alt="devices">
            <h5>Comes with editor and app</h5>
            <p>
                Create games easily, and directly try them out on your Android devices.
            </p>
        </div>
        <div class="feature column column-33">
            <img src="img/add_beacon.svg" alt="devices">
            <h5>Easily add beacons</h5>
            <p>
                Easily check the beacons into the game simply by bringing your phone close to them. Works fast and intuitive. Let the fun begin!
            </p>
        </div>
        <div class="feature column column-33">
            <img src="img/actions.svg" alt="devices">
            <h5>Make devices do stuff</h5>
            <p>
                No programming required. Easily drag and drop conditions and actions to define the game logic.
            </p>
        </div>
    </div>

</section>
`,
    styleUrls: ['app/components/features.css']
})

export class FeaturesComponent {
}