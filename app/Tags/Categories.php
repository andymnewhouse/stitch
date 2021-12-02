<?php

namespace App\Tags;

use Statamic\Facades\Entry;
use Statamic\Facades\Site;
use Statamic\Facades\Term;
use Statamic\Support\Arr;
use Statamic\Tags\Tags;

class Categories extends Tags
{
    public function index()
    {
        $site = Arr::getFirst($this->params, ['site', 'locale'], Site::current()->handle());

        $slugs = Entry::query()
            ->where('site', $site)
            ->where('collection', 'blog')
            ->get()
            ->map(function($item) {
                $category = $item->values()['category'] ?? null;

                if(is_array($category)) {
                    $category = $category[0];
                }
                return $category;
            })
            ->unique()
            ->sort()
            ->toArray();

        return Term::query()->where('taxonomy', 'category')->whereIn('slug', $slugs)->orderBy('title')->get();
    }
}
