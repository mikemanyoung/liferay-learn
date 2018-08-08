/**
 * Turn a tag list into a human-readable list of tags
 *
 * @param {string} tags - Comma separated list of tags.
 * @param {string} [keyword] - Keyword used to find special tags in the tag list. Ex: 'xz-'
 * @returns {string} If keyword exists in tags, returns a single tag. Otherwise, returns a pipe separated list of tags
 */

function createTagString(tags, keyword) {

  if (tags) {

    if (keyword) {
      if (tags.indexOf(keyword) == -1) {
        // if the tags do not have the target keyword return nothing.
        // this will happen a lot since most courses have many tags
        //    but we only want certain keywords surfaced.
        return null;
      }

      // create regex with the special keyword
      // for example, the following strings will return 'technology' if the keyword is 'xz-'
      //   - xz-technology
      //   - one,xz-technology
      //   - one,xz-technology,
      //   - one,xz-technology,two
      //   - one,xz-technology,two,xz-automation
      var regex = ".*?" + keyword + "([^,]+)";

      // Replaces dashes with a spaces
      return tags.match(regex)[1].replace(/-/g, ' ');
    }

    // replace dashes (-) with spaces
    tags = tags.replace(/-/g, ' ');

    // replace commas with a space-pipe-space ( | )
    tags = tags.replace(/,/g, ' | ');

    return tags;
  }

  return null;
}

function cueDetail() {
  if (document.querySelectorAll('.sj-page-detail-course').length > 0 || document.querySelectorAll('.sj-page-curriculum').length > 0) {

    var isDetail = document.querySelectorAll('.sj-page-detail-course').length > 0;

    if (isDetail) {
      overridePurchaseButtonText();

      // We should just put in a PR to add classes here so we can target this easier and safely?
      $('.sj-page-detail-course #skilljar-content .top-row-grey .row:nth-child(2) div.columns.text-center.large-6:nth-child(1)').addClass('detail-curriculum-left-content');
      $('.sj-page-detail-course #skilljar-content .top-row-grey .row:nth-child(2) div.columns.text-center.large-6:nth-child(2)').addClass('detail-curriculum-right-content');

    } else {
      $('.sj-page-curriculum .sj-summary').addClass('detail-curriculum-left-content');
      $('.sj-summary.detail-curriculum-left-content').next().addClass('detail-curriculum-right-content');

      $('.detail-curriculum-right-content').removeClass('large-4 pull-8').addClass('large-6');
      $('.detail-curriculum-left-content').removeClass('large-8 push-4').addClass('large-6');

      var rightContent = $('.detail-curriculum-right-content').detach();
      $('.detail-curriculum-left-content').before(rightContent);

      // Copy About this course / curriculum overview
      var $longDescription = $('.tabs .content:eq(1)').html();
      var $curriculumList = $('.tabs .content:eq(0)').html();

      var $curriculumWrapper = $('<div>');
      var $descriptionWrapper = $('<div>');

      $curriculumWrapper.addClass('curriculum-wrapper columns large-5');
      $descriptionWrapper.addClass('description-wrapper columns large-7');

      $curriculumWrapper.append($curriculumList);
      $descriptionWrapper.append($longDescription);

      $('#cp-content').append($descriptionWrapper);
      $('#cp-content').append($curriculumWrapper);

      // grab short description from meta tag
      var shortDescription = $('meta[name=description]').attr("content");
      if (shortDescription) {
        $('.detail-curriculum-left-content h1:nth-child(1)').after('<h2 class="curriculum-short-description">' + shortDescription + '</h2>');
      }
    }
    // Add xz tag string above course title
    var cleanXZTag = createTagString(getXZTag(),'xz-');
    if (cleanXZTag) {
      if (isDetail) {
        $('.detail-curriculum-right-content h1:nth-child(1)').before('<div class="featured-tag">' + cleanXZTag + '</div>');
      } else {
        $('.detail-curriculum-left-content h1:nth-child(1)').before('<div class="featured-tag">' + cleanXZTag + '</div>');
      }
    }
  }
}

// Function that returns xz tag
function getXZTag() {
  if (typeof skilljarCourse !== 'undefined') {
    for (var i = 0; i < skilljarCourse.tags.length; i++) {
      if (skilljarCourse.tags[i].startsWith('xz-')) {
        return skilljarCourse.tags[i];
      }
    }
  } else {
    return "";
  }
}

function overridePurchaseButtonText() {
  if ((window.location.host == 'learn.liferay.com' && $('.purchase-button-price').text().includes('FREE')) || (window.location.host == 'passport.liferay.com') || (window.location.host == 'wormwood.liferay.com')) {
    $('a.purchase-button').text('Start');
  }
}

function cueSeriesHero () {
  if (document.querySelectorAll('.sj-page-series').length > 0) {
    var seriesTitle = $('title').text();
    var seriesDesc = $('meta[name="description"]').attr('content');
    var seriesHero = $('.catalog-hero-series');
    seriesHero.find('h1').text(seriesTitle)
    seriesHero.find('p').text(seriesDesc)
    seriesHero.detach()
    $('.catalog-header').prepend(seriesHero);
    seriesHero.css('display', 'flex');
  }
  else {
    $('.catalog-hero-series').remove();
  }
}

function cueResumeButton() {

  // Button only surfaces on Curriculum page, this also assumes user isn't signed in or registered yet
    if (document.querySelectorAll('.sj-page-curriculum').length > 0 && document.querySelectorAll('#curriculum-list a.lesson-incomplete').length > 0) {

      var link = document.createElement('a');

      link.innerHTML = 'Start Course';
      link.className = 'medium button';

      var incompleteLink = document.querySelectorAll('#curriculum-list a.lesson-incomplete');
      link.href = incompleteLink[0].href;

      if (document.querySelectorAll('.lesson-complete').length > 0) {
        link.innerHTML = 'Resume';
      }
            
      // Place resume button under progress bar
      var btn = document.createElement('div');
      btn.className = 'resume-button';
      btn.appendChild(link);
      $(btn).appendTo('.detail-curriculum-left-content');
  }
};

function cueTiles() {

  var tiles = document.querySelectorAll('.sj-page-catalog a.coursebox-container');

  for (var i = 0; i < tiles.length; i++) {
    var tile = tiles[i];

    var image = tile.querySelector('.coursebox-image img');

    if (image) {
      var imageSrc = image.attributes['src'].value;
      $(tile).find('.coursebox-image').append("<div class='coursebox-image-container'></div>");
      $(tile).find('.coursebox-image-container').css({
        'background-image': "url(" + imageSrc + ")"
      });

      image.parentNode.removeChild(image);
    }

    // Grabs the xz tag, and turns it into human readable format
    var tagString = $(tile).find('[data-tag^="xz-"] span').text();
    tagString = createTagString(tagString,'xz-');

    // Surface the xz tag HTML on the tile
    if (tagString) {
      $(tile).find('.coursebox-text').before("<div class='tags'>" + tagString + "</div>");
    }
  }
}

jQuery(document).ready(function($) {
  cueTiles();
  cueDetail();
  cueSeriesHero();
  cueResumeButton();
});
