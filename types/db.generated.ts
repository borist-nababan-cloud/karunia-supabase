export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      abouts: {
        Row: {
          created_by: string | null
          id: number
          title: string | null
          updated_by: string | null
        }
        Insert: {
          created_by?: string | null
          id: number
          title?: string | null
          updated_by?: string | null
        }
        Update: {
          created_by?: string | null
          id?: number
          title?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "abouts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abouts_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      articles: {
        Row: {
          author_id: number | null
          category_id: number | null
          cover_url: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: number
          published_at: string | null
          slug: string | null
          title: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          author_id?: number | null
          category_id?: number | null
          cover_url?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: never
          published_at?: string | null
          slug?: string | null
          title?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          author_id?: number | null
          category_id?: number | null
          cover_url?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: never
          published_at?: string | null
          slug?: string | null
          title?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "articles_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "authors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      authors: {
        Row: {
          avatar_id: number | null
          created_at: string
          created_by: string | null
          email: string | null
          id: number
          name: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          avatar_id?: number | null
          created_at?: string
          created_by?: string | null
          email?: string | null
          id?: never
          name?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          avatar_id?: number | null
          created_at?: string
          created_by?: string | null
          email?: string | null
          id?: never
          name?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "authors_avatar_id_fkey"
            columns: ["avatar_id"]
            isOneToOne: false
            referencedRelation: "storage_objects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "authors_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "authors_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ben_new_spk: {
        Row: {
          created_at: string
          created_by: string | null
          head_sales: string | null
          idkendaraan: string | null
          idspk: string
          kodecabang: string | null
          kodepembeli: string | null
          lasteditdate: string
          lastuser: string | null
          noregspk: string | null
          nospk: string | null
          nospkonline: string | null
          notes: string | null
          payment: string | null
          pembeli: string | null
          sales: string | null
          status: string
          tanggal: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          head_sales?: string | null
          idkendaraan?: string | null
          idspk?: string
          kodecabang?: string | null
          kodepembeli?: string | null
          lasteditdate?: string
          lastuser?: string | null
          noregspk?: string | null
          nospk?: string | null
          nospkonline?: string | null
          notes?: string | null
          payment?: string | null
          pembeli?: string | null
          sales?: string | null
          status?: string
          tanggal?: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          head_sales?: string | null
          idkendaraan?: string | null
          idspk?: string
          kodecabang?: string | null
          kodepembeli?: string | null
          lasteditdate?: string
          lastuser?: string | null
          noregspk?: string | null
          nospk?: string | null
          nospkonline?: string | null
          notes?: string | null
          payment?: string | null
          pembeli?: string | null
          sales?: string | null
          status?: string
          tanggal?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      branches: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          created_by: string | null
          id: number
          latitude: number | null
          longitude: number | null
          name: string
          phone_number: string | null
          province: string | null
          updated_at: string
          updated_by: string | null
          whatsapp_number: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          created_by?: string | null
          id?: never
          latitude?: number | null
          longitude?: number | null
          name: string
          phone_number?: string | null
          province?: string | null
          updated_at?: string
          updated_by?: string | null
          whatsapp_number?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          created_by?: string | null
          id?: never
          latitude?: number | null
          longitude?: number | null
          name?: string
          phone_number?: string | null
          province?: string | null
          updated_at?: string
          updated_by?: string | null
          whatsapp_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "branches_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "branches_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          id: number
          name: string | null
          slug: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: never
          name?: string | null
          slug?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: never
          name?: string | null
          slug?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      colors: {
        Row: {
          colorname: string | null
          created_at: string
          created_by: string | null
          id: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          colorname?: string | null
          created_at?: string
          created_by?: string | null
          id?: never
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          colorname?: string | null
          created_at?: string
          created_by?: string | null
          id?: never
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "colors_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "colors_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      content_blocks: {
        Row: {
          component_id: number
          component_type: string
          created_by: string | null
          entity_id: number
          entity_table: string
          field_name: string
          id: number
          sort_order: number
          updated_by: string | null
        }
        Insert: {
          component_id: number
          component_type: string
          created_by?: string | null
          entity_id: number
          entity_table: string
          field_name: string
          id?: never
          sort_order?: number
          updated_by?: string | null
        }
        Update: {
          component_id?: number
          component_type?: string
          created_by?: string | null
          entity_id?: number
          entity_table?: string
          field_name?: string
          id?: never
          sort_order?: number
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "content_blocks_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_blocks_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      globals: {
        Row: {
          created_by: string | null
          default_seo_id: number | null
          favicon_id: number | null
          id: number
          site_description: string
          site_name: string
          updated_by: string | null
        }
        Insert: {
          created_by?: string | null
          default_seo_id?: number | null
          favicon_id?: number | null
          id: number
          site_description: string
          site_name: string
          updated_by?: string | null
        }
        Update: {
          created_by?: string | null
          default_seo_id?: number | null
          favicon_id?: number | null
          id?: number
          site_description?: string
          site_name?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "globals_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "globals_default_seo_id_fkey"
            columns: ["default_seo_id"]
            isOneToOne: true
            referencedRelation: "shared_seos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "globals_favicon_id_fkey"
            columns: ["favicon_id"]
            isOneToOne: false
            referencedRelation: "storage_objects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "globals_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mstr_type: {
        Row: {
          autonum: number
          biaya_bbn: number
          created_at: string
          created_by: string | null
          harga: number
          id_type: string
          nama_group: string
          nama_type: string
          notes: string | null
          tahun: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          autonum?: number
          biaya_bbn?: number
          created_at?: string
          created_by?: string | null
          harga?: number
          id_type?: string
          nama_group?: string
          nama_type?: string
          notes?: string | null
          tahun?: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          autonum?: number
          biaya_bbn?: number
          created_at?: string
          created_by?: string | null
          harga?: number
          id_type?: string
          nama_group?: string
          nama_type?: string
          notes?: string | null
          tahun?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      mstr_type_detail: {
        Row: {
          autonum: number
          created_at: string
          created_by: string | null
          id_type: string
          nama_group_detail: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          autonum?: number
          created_at?: string
          created_by?: string | null
          id_type?: string
          nama_group_detail?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          autonum?: number
          created_at?: string
          created_by?: string | null
          id_type?: string
          nama_group_detail?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      payment_files: {
        Row: {
          created_by: string | null
          payment_id: number
          sort_order: number
          storage_object_id: number
          updated_by: string | null
        }
        Insert: {
          created_by?: string | null
          payment_id: number
          sort_order?: number
          storage_object_id: number
          updated_by?: string | null
        }
        Update: {
          created_by?: string | null
          payment_id?: number
          sort_order?: number
          storage_object_id?: number
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_files_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_files_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "spk_section_payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_files_storage_object_id_fkey"
            columns: ["storage_object_id"]
            isOneToOne: false
            referencedRelation: "storage_objects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_files_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          blocked: boolean
          confirmed: boolean
          created_at: string
          created_by: string | null
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          role_custom: Database["public"]["Enums"]["user_role"] | null
          updated_at: string
          updated_by: string | null
          username: string
          whatsapp: string | null
        }
        Insert: {
          blocked?: boolean
          confirmed?: boolean
          created_at?: string
          created_by?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          role_custom?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string
          updated_by?: string | null
          username: string
          whatsapp?: string | null
        }
        Update: {
          blocked?: boolean
          confirmed?: boolean
          created_at?: string
          created_by?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          role_custom?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string
          updated_by?: string | null
          username?: string
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_profiles: {
        Row: {
          address: string | null
          approved: boolean
          blocked: boolean
          city: string | null
          created_at: string
          created_by: string | null
          email: string | null
          id: number
          location: Json | null
          namasupervisor: string | null
          online_stat: boolean
          phonenumber: string | null
          photo_profile_id: number | null
          province: string | null
          sales_uid: string
          surename: string | null
          updated_at: string
          updated_by: string | null
          wanumber: string | null
        }
        Insert: {
          address?: string | null
          approved?: boolean
          blocked?: boolean
          city?: string | null
          created_at?: string
          created_by?: string | null
          email?: string | null
          id?: never
          location?: Json | null
          namasupervisor?: string | null
          online_stat?: boolean
          phonenumber?: string | null
          photo_profile_id?: number | null
          province?: string | null
          sales_uid: string
          surename?: string | null
          updated_at?: string
          updated_by?: string | null
          wanumber?: string | null
        }
        Update: {
          address?: string | null
          approved?: boolean
          blocked?: boolean
          city?: string | null
          created_at?: string
          created_by?: string | null
          email?: string | null
          id?: never
          location?: Json | null
          namasupervisor?: string | null
          online_stat?: boolean
          phonenumber?: string | null
          photo_profile_id?: number | null
          province?: string | null
          sales_uid?: string
          surename?: string | null
          updated_at?: string
          updated_by?: string | null
          wanumber?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_profiles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_profiles_photo_profile_id_fkey"
            columns: ["photo_profile_id"]
            isOneToOne: false
            referencedRelation: "storage_objects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_profiles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      shared_media: {
        Row: {
          created_by: string | null
          file_id: number | null
          id: number
          updated_by: string | null
        }
        Insert: {
          created_by?: string | null
          file_id?: number | null
          id?: never
          updated_by?: string | null
        }
        Update: {
          created_by?: string | null
          file_id?: number | null
          id?: never
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shared_media_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shared_media_file_id_fkey"
            columns: ["file_id"]
            isOneToOne: false
            referencedRelation: "storage_objects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shared_media_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      shared_quotes: {
        Row: {
          body: string | null
          created_by: string | null
          id: number
          title: string | null
          updated_by: string | null
        }
        Insert: {
          body?: string | null
          created_by?: string | null
          id?: never
          title?: string | null
          updated_by?: string | null
        }
        Update: {
          body?: string | null
          created_by?: string | null
          id?: never
          title?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shared_quotes_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shared_quotes_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      shared_rich_texts: {
        Row: {
          body: string | null
          created_by: string | null
          id: number
          updated_by: string | null
        }
        Insert: {
          body?: string | null
          created_by?: string | null
          id?: never
          updated_by?: string | null
        }
        Update: {
          body?: string | null
          created_by?: string | null
          id?: never
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shared_rich_texts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shared_rich_texts_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      shared_seos: {
        Row: {
          created_by: string | null
          id: number
          meta_description: string
          meta_title: string
          share_image_id: number | null
          updated_by: string | null
        }
        Insert: {
          created_by?: string | null
          id?: never
          meta_description: string
          meta_title: string
          share_image_id?: number | null
          updated_by?: string | null
        }
        Update: {
          created_by?: string | null
          id?: never
          meta_description?: string
          meta_title?: string
          share_image_id?: number | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shared_seos_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shared_seos_share_image_id_fkey"
            columns: ["share_image_id"]
            isOneToOne: false
            referencedRelation: "storage_objects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shared_seos_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      shared_sliders: {
        Row: {
          created_by: string | null
          id: number
          updated_by: string | null
        }
        Insert: {
          created_by?: string | null
          id?: never
          updated_by?: string | null
        }
        Update: {
          created_by?: string | null
          id?: never
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shared_sliders_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shared_sliders_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      slider_files: {
        Row: {
          created_by: string | null
          slider_id: number
          sort_order: number
          storage_object_id: number
          updated_by: string | null
        }
        Insert: {
          created_by?: string | null
          slider_id: number
          sort_order?: number
          storage_object_id: number
          updated_by?: string | null
        }
        Update: {
          created_by?: string | null
          slider_id?: number
          sort_order?: number
          storage_object_id?: number
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "slider_files_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "slider_files_slider_id_fkey"
            columns: ["slider_id"]
            isOneToOne: false
            referencedRelation: "shared_sliders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "slider_files_storage_object_id_fkey"
            columns: ["storage_object_id"]
            isOneToOne: false
            referencedRelation: "storage_objects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "slider_files_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      spk_section_details: {
        Row: {
          alamat_bpkb_stnk: string | null
          created_by: string | null
          id: number
          kota_stnk_bpkb: string | null
          nama_bpkb_stnk: string | null
          spk_id: number
          updated_by: string | null
        }
        Insert: {
          alamat_bpkb_stnk?: string | null
          created_by?: string | null
          id?: never
          kota_stnk_bpkb?: string | null
          nama_bpkb_stnk?: string | null
          spk_id: number
          updated_by?: string | null
        }
        Update: {
          alamat_bpkb_stnk?: string | null
          created_by?: string | null
          id?: never
          kota_stnk_bpkb?: string | null
          nama_bpkb_stnk?: string | null
          spk_id?: number
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "spk_section_details_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spk_section_details_spk_id_fkey"
            columns: ["spk_id"]
            isOneToOne: true
            referencedRelation: "spks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spk_section_details_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      spk_section_payments: {
        Row: {
          angsuran: number | null
          asuransi: string | null
          cara_bayar_tj: Database["public"]["Enums"]["payment_method"]
          created_by: string | null
          dp: number | null
          id: number
          ket_tj: string | null
          keterangan: string | null
          nama_leasing: string | null
          pembelian_via:
            | Database["public"]["Enums"]["pembelian_via_type"]
            | null
          spk_id: number
          tanda_jadi: number | null
          tenor: number | null
          updated_by: string | null
        }
        Insert: {
          angsuran?: number | null
          asuransi?: string | null
          cara_bayar_tj?: Database["public"]["Enums"]["payment_method"]
          created_by?: string | null
          dp?: number | null
          id?: never
          ket_tj?: string | null
          keterangan?: string | null
          nama_leasing?: string | null
          pembelian_via?:
            | Database["public"]["Enums"]["pembelian_via_type"]
            | null
          spk_id: number
          tanda_jadi?: number | null
          tenor?: number | null
          updated_by?: string | null
        }
        Update: {
          angsuran?: number | null
          asuransi?: string | null
          cara_bayar_tj?: Database["public"]["Enums"]["payment_method"]
          created_by?: string | null
          dp?: number | null
          id?: never
          ket_tj?: string | null
          keterangan?: string | null
          nama_leasing?: string | null
          pembelian_via?:
            | Database["public"]["Enums"]["pembelian_via_type"]
            | null
          spk_id?: number
          tanda_jadi?: number | null
          tenor?: number | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "spk_section_payments_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spk_section_payments_spk_id_fkey"
            columns: ["spk_id"]
            isOneToOne: true
            referencedRelation: "spks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spk_section_payments_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      spk_section_units: {
        Row: {
          bonus: string | null
          color_id: number | null
          created_by: string | null
          harga_otr: number | null
          id: number
          lain_lain: string | null
          no_mesin: string | null
          no_rangka: string | null
          spk_id: number
          tahun: string | null
          updated_by: string | null
          vehicle_type_id: number | null
        }
        Insert: {
          bonus?: string | null
          color_id?: number | null
          created_by?: string | null
          harga_otr?: number | null
          id?: never
          lain_lain?: string | null
          no_mesin?: string | null
          no_rangka?: string | null
          spk_id: number
          tahun?: string | null
          updated_by?: string | null
          vehicle_type_id?: number | null
        }
        Update: {
          bonus?: string | null
          color_id?: number | null
          created_by?: string | null
          harga_otr?: number | null
          id?: never
          lain_lain?: string | null
          no_mesin?: string | null
          no_rangka?: string | null
          spk_id?: number
          tahun?: string | null
          updated_by?: string | null
          vehicle_type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spk_section_units_color_id_fkey"
            columns: ["color_id"]
            isOneToOne: false
            referencedRelation: "colors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spk_section_units_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spk_section_units_spk_id_fkey"
            columns: ["spk_id"]
            isOneToOne: true
            referencedRelation: "spks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spk_section_units_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spk_section_units_vehicle_type_id_fkey"
            columns: ["vehicle_type_id"]
            isOneToOne: false
            referencedRelation: "vehicle_types"
            referencedColumns: ["id"]
          },
        ]
      }
      spks: {
        Row: {
          alamat_customer: string
          branch_id: number | null
          created_at: string
          created_by: string | null
          editable: boolean
          email_customer: string | null
          finish: boolean
          id: number
          kk_url: string | null
          kota_customer: string | null
          ktp_url: string | null
          nama_customer: string
          nama_debitur: string | null
          no_spk: string
          no_telepon_customer: string
          offline_idspk: string | null
          offline_nospk: string | null
          pekerjaan_customer: string | null
          sales_profile_id: number | null
          selfie_url: string | null
          tanggal: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          alamat_customer: string
          branch_id?: number | null
          created_at?: string
          created_by?: string | null
          editable?: boolean
          email_customer?: string | null
          finish?: boolean
          id?: never
          kk_url?: string | null
          kota_customer?: string | null
          ktp_url?: string | null
          nama_customer: string
          nama_debitur?: string | null
          no_spk: string
          no_telepon_customer: string
          offline_idspk?: string | null
          offline_nospk?: string | null
          pekerjaan_customer?: string | null
          sales_profile_id?: number | null
          selfie_url?: string | null
          tanggal: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          alamat_customer?: string
          branch_id?: number | null
          created_at?: string
          created_by?: string | null
          editable?: boolean
          email_customer?: string | null
          finish?: boolean
          id?: never
          kk_url?: string | null
          kota_customer?: string | null
          ktp_url?: string | null
          nama_customer?: string
          nama_debitur?: string | null
          no_spk?: string
          no_telepon_customer?: string
          offline_idspk?: string | null
          offline_nospk?: string | null
          pekerjaan_customer?: string | null
          sales_profile_id?: number | null
          selfie_url?: string | null
          tanggal?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "spks_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spks_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spks_sales_profile_id_fkey"
            columns: ["sales_profile_id"]
            isOneToOne: false
            referencedRelation: "sales_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spks_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      stock: {
        Row: {
          biaya_bbn: number
          created_by: string | null
          harga: number
          id_kendaraan: string
          id_status_stock: string
          id_transaksi: string | null
          id_type: string | null
          id_warna: string | null
          jual: string
          kirim: string
          no_do: string | null
          no_mesin: string | null
          no_rangka: string | null
          no_rrn: string | null
          notes: string | null
          tahun: string
          taked: string
          tgl_do: string | null
          tgl_masuk: string | null
          updated_by: string | null
        }
        Insert: {
          biaya_bbn?: number
          created_by?: string | null
          harga?: number
          id_kendaraan: string
          id_status_stock?: string
          id_transaksi?: string | null
          id_type?: string | null
          id_warna?: string | null
          jual?: string
          kirim?: string
          no_do?: string | null
          no_mesin?: string | null
          no_rangka?: string | null
          no_rrn?: string | null
          notes?: string | null
          tahun?: string
          taked?: string
          tgl_do?: string | null
          tgl_masuk?: string | null
          updated_by?: string | null
        }
        Update: {
          biaya_bbn?: number
          created_by?: string | null
          harga?: number
          id_kendaraan?: string
          id_status_stock?: string
          id_transaksi?: string | null
          id_type?: string | null
          id_warna?: string | null
          jual?: string
          kirim?: string
          no_do?: string | null
          no_mesin?: string | null
          no_rangka?: string | null
          no_rrn?: string | null
          notes?: string | null
          tahun?: string
          taked?: string
          tgl_do?: string | null
          tgl_masuk?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_stock_id_type"
            columns: ["id_type"]
            isOneToOne: false
            referencedRelation: "mstr_type_detail"
            referencedColumns: ["id_type"]
          },
          {
            foreignKeyName: "stock_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      storage_objects: {
        Row: {
          bucket: string
          created_at: string
          formats: Json | null
          height: number | null
          id: number
          mime: string | null
          name: string
          size_bytes: number | null
          storage_path: string
          width: number | null
        }
        Insert: {
          bucket: string
          created_at?: string
          formats?: Json | null
          height?: number | null
          id?: never
          mime?: string | null
          name: string
          size_bytes?: number | null
          storage_path: string
          width?: number | null
        }
        Update: {
          bucket?: string
          created_at?: string
          formats?: Json | null
          height?: number | null
          id?: never
          mime?: string | null
          name?: string
          size_bytes?: number | null
          storage_path?: string
          width?: number | null
        }
        Relationships: []
      }
      supervisors: {
        Row: {
          created_at: string
          created_by: string | null
          id: number
          namasupervisor: string
          updated_at: string
          updated_by: string | null
          user_auth_id: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: never
          namasupervisor: string
          updated_at?: string
          updated_by?: string | null
          user_auth_id?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: never
          namasupervisor?: string
          updated_at?: string
          updated_by?: string | null
          user_auth_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "supervisors_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "supervisors_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          blocked: boolean
          confirmed: boolean
          created_at: string
          created_by: string | null
          email: string | null
          force_password_reset: boolean | null
          full_name: string | null
          id: string
          location: Json | null
          online_stat: boolean
          phone: string | null
          role_id: number | null
          supervisor_id: number | null
          updated_at: string
          updated_by: string | null
          username: string | null
          whatsapp: string | null
        }
        Insert: {
          blocked?: boolean
          confirmed?: boolean
          created_at?: string
          created_by?: string | null
          email?: string | null
          force_password_reset?: boolean | null
          full_name?: string | null
          id: string
          location?: Json | null
          online_stat?: boolean
          phone?: string | null
          role_id?: number | null
          supervisor_id?: number | null
          updated_at?: string
          updated_by?: string | null
          username?: string | null
          whatsapp?: string | null
        }
        Update: {
          blocked?: boolean
          confirmed?: boolean
          created_at?: string
          created_by?: string | null
          email?: string | null
          force_password_reset?: boolean | null
          full_name?: string | null
          id?: string
          location?: Json | null
          online_stat?: boolean
          phone?: string | null
          role_id?: number | null
          supervisor_id?: number | null
          updated_at?: string
          updated_by?: string | null
          username?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_profiles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "user_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_profiles_supervisor_id_fkey"
            columns: ["supervisor_id"]
            isOneToOne: false
            referencedRelation: "supervisors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_profiles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          description: string | null
          id: number
          role_name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          role_name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          role_name?: string
        }
        Relationships: []
      }
      vehicle_groups: {
        Row: {
          created_at: string
          created_by: string | null
          id: number
          name: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: never
          name: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: never
          name?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_groups_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_groups_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_types: {
        Row: {
          created_at: string
          created_by: string | null
          harga_otr: number
          id: number
          name: string
          updated_at: string
          updated_by: string | null
          vehicle_group: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          harga_otr?: number
          id?: never
          name: string
          updated_at?: string
          updated_by?: string | null
          vehicle_group?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          harga_otr?: number
          id?: never
          name?: string
          updated_at?: string
          updated_by?: string | null
          vehicle_group?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_types_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_types_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_auth_status: { Args: never; Returns: Json }
      ensure_user_profile: { Args: never; Returns: Json }
      generate_spk_number: { Args: never; Returns: string }
      get_current_user_profile: { Args: never; Returns: Json }
      get_my_profile_with_diagnostics: { Args: never; Returns: Json }
      get_my_role: { Args: never; Returns: string }
      to_roman_month: { Args: { m: number }; Returns: string }
    }
    Enums: {
      payment_method: "TUNAI" | "TRANSFER"
      pembelian_via_type: "TUNAI" | "KREDIT"
      user_role: "SALES" | "SPV" | "ADMIN"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      payment_method: ["TUNAI", "TRANSFER"],
      pembelian_via_type: ["TUNAI", "KREDIT"],
      user_role: ["SALES", "SPV", "ADMIN"],
    },
  },
} as const

