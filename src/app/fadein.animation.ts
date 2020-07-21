import { trigger, animate, transition, style, query, group } from '@angular/animations';

export const fadeInAnimation =
        trigger('fadeInAnimation', [
            transition('* => *', [
              style({ opacity: 0 }),
              animate('0.3s', style({ opacity: 1 }))],
              ),
          ]);