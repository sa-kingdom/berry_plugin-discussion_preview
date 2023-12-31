<?php

/*
 * This file is part of simonxeko/preview-discussion.
 *
 * Copyright (c) 2020 simonxeko.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
    new Extend\Locales(__DIR__ . '/resources/locale')
];
